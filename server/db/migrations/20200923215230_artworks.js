exports.up = (knex) => {
  return knex.schema.createTable('artworks', (table) => {
    table.increments('id')
    table.integer('cause_id') // for artwork's charity (user id)
    table.integer('artist_id') // also a user id
    table.string('artwork_name')
    table.string('artwork_description')
    table.string('artwork_image')
    table.boolean('is_available')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('artworks')
}
