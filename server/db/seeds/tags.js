export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tags').del()

  // Inserts seed entries
  await knex('tags').insert([
    { label: 'Nature' },
    { label: 'Modesty' },
    { label: 'Strength' },
    { label: 'Leadership' },
    { label: 'Birds' },
    { label: 'Uplifting' },
    { label: 'Teamwork' },
    { label: 'Aroha' },
    { label: 'Warning' },
    { label: 'Whanau' },
  ])
}