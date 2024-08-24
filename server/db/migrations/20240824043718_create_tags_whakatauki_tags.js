export async function up(knex) {
  return knex.schema.createTable('whakatauki_tags', (table) => {
    table.increments('id')
    table.number('whakatauki_id')
    table.number('tag_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('whakatauki_tags')
}
