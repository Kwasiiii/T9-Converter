import express from 'express'
import { getInput } from '../controller/converter.js'

const router = express.Router()

router.route('/:input')
  .get(getInput)

export default router