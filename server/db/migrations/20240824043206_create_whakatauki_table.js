export async function up(knex) {
  return knex.schema.createTable('whakatauki', (table) => {
    table.increments('id').primary()
    table.string('text')
    table.string('translation_en')
    table.string('explanation')
    table.string('credit')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('whakatauki')
}
