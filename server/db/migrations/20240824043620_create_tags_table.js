export async function up(knex) {
  return knex.schema.createTable('tags', (table) => {
    table.increments('id').primary()
    table.string('label')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('tags')
}
