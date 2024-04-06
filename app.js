if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express=require('express')
const app=express()
const path=require('path')
const ejsMate=require('ejs-mate')
const routerw=require('./router/camp')
const mongoose=require('mongoose')
mongoose.connect(process.env.Database,{useNewUrlParser:true})
const db= mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log('mongoose connected'))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'Views'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use('/',routerw)
app.engine('ejs',ejsMate)

app.listen(process.env.PORT || 3000)