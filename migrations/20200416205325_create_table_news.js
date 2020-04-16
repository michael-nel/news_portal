exports.up = function (knex) {
  return knex.schema.createTable('news', table => {
    table.increments('id').primary()
    table.string('title', 100).notNull()
    table.text('new').notNull()
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('news')
};