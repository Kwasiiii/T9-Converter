import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import router from './config/router.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

const startServer = async () => {

  try {
    await mongoose.connect(process.env.dbURI)
    console.log('🤝 Database connection established! 🤝')

    app.use(express.json())

    app.use('/api', router)

    app.use(express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })

    app.use((req, _res, next) => {
      console.log(`🚨 Request Received: ${req.method} - ${req.url}`)
      next()
    })

    app.use((_req, res) => {
      return res.status(404).json({ message: 'Path not found' })
    })

    const server = app.listen(process.env.PORT || 4000, () => console.log(`🚀 Server is up and running on port: ${process.env.PORT}`))
    server.timeout = 10000

  } catch (err) {
    console.log('🚨 Something went wrong...failed to connect')
    console.log(err)
  }
}
startServer()
