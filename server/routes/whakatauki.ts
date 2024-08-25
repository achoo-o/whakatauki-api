import { Router } from 'express'

import * as db from '../db/whakatauki.ts'
import { Output } from '../../models/whakatauki.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const whakatauki = await db.getAllWhakatauki()
    const tags = await db.getAllTags()
    const data = whakatauki.map((obj, i) => {
      return {...obj, tags: tags[i]}
    })
    const output = JSON.stringify(data)
    res.json(output)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
