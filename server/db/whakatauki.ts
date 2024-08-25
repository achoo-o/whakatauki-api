import connection from './connection.ts'
import { Output, Tags } from '../../models/whakatauki.ts'

export async function getAllWhakatauki(db = connection) {
  const whakatauki = db('whakatauki').select()
  return whakatauki
}

export async function getAllTags(db = connection) {
  const tags = await db('tags').join('whakatauki_tags','tags.id','whakatauki_tags.tag_id').select('label','whakatauki_id');
  const tagsArr: string[] = []

  //Create an array of arrays whose index are equal to whakatauki_id
  tags.map((obj: Tags) => {
    const { label, whakatauki_id } = obj
    tagsArr[whakatauki_id-1] === undefined ? tagsArr[whakatauki_id-1] = [label] : tagsArr[whakatauki_id-1].push(label)
  })

  return tagsArr
}
