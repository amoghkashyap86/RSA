
const express=require('express')
const app=express()
const rsa=require('node-rsa')
const key=new rsa({b:512})
app.use(express.urlencoded({extended:false}))
encrptyed_text=""
app.post('/encrypt',(req,res)=>{
    text=req.body.name
    encrptyed_text=key.encrypt(text,'base64')
    res.status(200)
    res.sendFile(`D:\\rsa\\server\\data.html`)
    // res.send(encrptyed_text)
})
app.get('/',(req,res)=>{
    res.sendFile(`D:\\rsa\\server\\index.html`)
})
app.post('/posted',(req,res)=>{
          console.log(JSON.parse('{"name":"heloo"}'))
    console.log(req.body)
})
app.get('/getencr',(req,res)=>{
    res.send(encrptyed_text)
})
app.listen(80)