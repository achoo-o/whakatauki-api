export async function up(knex) {
  return knex.schema.createTable('whakatauki_tags', (table) => {
    table.increments('id').primary()
    table.integer('whakatauki_id').references('whakatauki.id')
    table.integer('tag_id').references('tags.id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('whakatauki_tags')
}
