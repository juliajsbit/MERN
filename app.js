const express = require('express')
const config = require('config')
const mongooose = require('mongoose')

const app = express()

const PORT = config.get('port') || 5000

async function start() {
    try{
       await mongooose.connect(config.get('mongoUri'), {

       })
    }catch (e){
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()

app.listen(PORT, ()=> console.log(`has been started on ${PORT}`))