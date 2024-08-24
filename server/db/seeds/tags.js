export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tags').del()

  // Inserts seed entries
  await knex('tags').insert([
    { label: 'Nature' },            //1
    { label: 'Modesty' },           //2
    { label: 'Strength' },          //3
    { label: 'Leadership' },        //4
    { label: 'Birds' },             //5
    { label: 'Uplifting' },         //6
    { label: 'Teamwork' },          //7
    { label: 'Aroha' },             //8
    { label: 'Guidance/Warning' },  //9
    { label: 'Whanau' },            //10
    { label: 'Motivation' },        //11
  ])
}