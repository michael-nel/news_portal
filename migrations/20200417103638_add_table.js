exports.up = function (knex) {
  return knex.schema.alterTable('news', function (table) {
    table.string('resume', 100).nullable()
    table.string('author', 30).nullable()
    table.date('date_news').nullable();
  })
};

exports.down = function (knex) {
  return knex.schema.table('news', function (table) {
    table.dropColumn('resume'),
      table.dropColumn('author')
    table.dropColumn('date_news');
  });
};