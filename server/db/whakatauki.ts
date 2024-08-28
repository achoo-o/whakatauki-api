import connection from './connection.ts'

export async function getAllWhakatauki(db = connection) {
  const whakatauki = await db('whakatauki')

  //Organise and select return values
  .select('whakatauki.id as id', 'whakatauki.text as text', 'whakatauki.translation_en as translationEng', 'explanation', 'credit')
  .leftJoin('whakatauki_tags','whakatauki_tags.whakatauki_id','whakatauki.id')
  .leftJoin('tags','whakatauki_tags.tag_id','tags.id')
  .groupBy('whakatauki.id')
  .orderBy('whakatauki.id')

  //Define output
  .then((rows => {
    const result = rows.map(async (row) => {
      return {
        id: row.id,
        text: row.text,
        translationEng: row.translationEng,
        explanation: row.explanation,
        credit: row.credit,
        tags: await db('tags')
          .join('whakatauki_tags','whakatauki_tags.tag_id','tags.id')
          .where('whakatauki_tags.whakatauki_id', row.id)
          .pluck('label')
      }})
      return Promise.all(result)
  }))
  return whakatauki
}