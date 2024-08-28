import { Router } from 'express'
import { Output } from '../../models/whakatauki.ts'
import { getAllWhakatauki } from '../db/whakatauki.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const whakatauki: Output[] = await getAllWhakatauki()
    res.json(whakatauki)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
