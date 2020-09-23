
exports.up = (knex) => {
    return knex.schema.createTable('users', (table) => {
        table.increments('id')
        table.int('artwork_id') // for users own artwork
        table.string('username')
        table.binary('hash')
        table.string('email')
        table.string('name')
        table.string('profile_picture')
        table.string('about_info')
        // table.integer('user_id').references('id').inTable('users');
      })
    }
    
exports.down = function(knex) {
    return knex.schema.dropTable('users');
}  


