exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username')
    table.string('name')
    table.binary('hash')
    table.string('email')
    table.string('profile_picture')
    table.string('about', 1024)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
