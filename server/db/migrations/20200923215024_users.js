exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username')
    table.string('name')
    table.binary('hash')
    table.string('email')
    table.string('profile_picture', 1024)
    table.string('about', 1024)
    table.boolean('is_Charity').defaultTo(false)
    table.boolean('is_artist').defaultTo(false)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
