exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('username')
    table.binary('hash')
    table.string('email')
    table.string('name')
    table.string('profile_picture')
    table.string('about_info')
    table.boolean('is_artist')
    table.boolean('is_charity')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
