exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dish', table => {
      table.increments();
      table.string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('recipe', table => {
      table.increments();
      table.string('name', 128)
        .notNullable()
        .unique();
      table.string('steps', 512)
        .notNullable();
      table.integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('dish')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('ingredient', table => {
      table.increments();
      table.string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('recipe_ingredient', table => {
      table.increments();
      table.float('quantity')
        .notNullable();
      table.string('unit', 32)
        .notNullable();
      table.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipe')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      table.integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      table.unique(['recipe_id', 'ingredient_id']);
    });  
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('dish')
    .dropTableIfExists('recipe')
    .dropTableIfExists('recipe_ingredient')
    .dropTableIfExists('ingredient');
};
