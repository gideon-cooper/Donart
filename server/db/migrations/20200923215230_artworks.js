exports.up = (knex) => {
  return knex.schema.createTable('artworks', (table) => {
    table.increments('id').primary()
    table.integer('cause_id').references('users.id')// for artwork's charity (user id)
    table.integer('artist_id').references('users.id')
    table.string('name')
    table.string('description', 1024)
    table.string('image', 1024)
    table.integer('price')
    table.boolean('is_available').defaultTo(true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('artworks')
}
