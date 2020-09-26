const path = require('path')
const express = require('express')
require('dotenv').config({ path: path.join(__dirname, '.env') })
const donartRoutes = require('./routes/donart')
const authRoutes = require('./routes/auth')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/donart', donartRoutes)
module.exports = server
