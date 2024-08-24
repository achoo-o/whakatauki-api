export async function up(knex) {
  return knex.schema.createTable('whakatauki', (table) => {
    table.increments('id')
    table.string('text')
    table.string('translation_en')
    table.string('explanation')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('whakatauki')
}
