const express=require('express')
const app=express()
const route=require('../src/Router/Route')
const cors=require('cors')


app.use(express.json())
app.use(cors())

app.use('/',route)


app.listen(5000,()=>{
    console.log('App is listen on 5000')
})