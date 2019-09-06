exports.seed = function(knex, Promise) {
  return knex('dish').truncate()
    .then(() => {
      return knex('dish').insert([
        {
          name: 'pizza',
        },
        {
          name: 'tacos',
        },
      ]);
    })
    .then(() => {
      return knex('ingredient').truncate()
        .then(() => {
          return knex('ingredient').insert([
            {
              name: 'sugar',
            },
            {
              name: 'salt',
            },
            {
              name: 'anchovies',
            },
            {
              name: 'cheese',
            },
            {
              name: 'dough',
            },
          ]);
        })
    })
    .then(() => {
      return knex('recipe').truncate()
        .then(() => {
          return knex('recipe').insert([
            {
              name: 'Fish Tacos',
              steps: `
                Step 1: Do the first thing.
                Step 2: Do the second thing.
              `,
              dish_id: 2,
            },
            {
              name: 'Tex-Mex Tacos',
              steps: `
                Step 1: Do the first thing.
                Step 2: Do the second thing.
              `,
              dish_id: 2,
            },
            {
              name: 'Cheese Pizza',
              steps: `
                Step 1: Do the first thing.
                Step 2: Do the second thing.
              `,
              dish_id: 1,
            },
            {
              name: 'Meat Lovers Pizza',
              steps: `
                Step 1: Do the first thing.
                Step 2: Do the second thing.
              `,
              dish_id: 1,
            }
          ]);
        });
    })
    .then(() => {
      return knex('recipe_ingredient').truncate()
        .then(() => {
          return knex('recipe_ingredient').insert([
            {
              quantity: 1,
              unit: 'cup',
              recipe_id: 1,
              ingredient_id: 3,
            },
            {
              quantity: 2,
              unit: 'teaspoon',
              recipe_id: 1,
              ingredient_id: 2,
            },
            {
              quantity: 3,
              unit: 'cups',
              recipe_id: 3,
              ingredient_id: 5,
            },
            {
              quantity: 2,
              unit: 'cups',
              recipe_id: 4,
              ingredient_id: 5,
            },
            {
              quantity: 2,
              unit: 'cups',
              recipe_id: 3,
              ingredient_id: 4,
            },
            {
              quantity: 1,
              unit: 'tablespoon',
              recipe_id: 2,
              ingredient_id: 1,
            }
          ])
        })
    });
};
