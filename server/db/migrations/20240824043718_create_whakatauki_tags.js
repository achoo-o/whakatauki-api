export async function up(knex) {
  return knex.schema.createTable('whakatauki_tags', (table) => {
    table.integer('id').primary()
    table.integer('whakatauki_id')
    table.integer('tag_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('whakatauki_tags')
}
