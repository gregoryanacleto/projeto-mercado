const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
 host:"localhost",
 user:"root",
 password:"",
 database:"mercado"
})

// 🔹 CREATE
app.post("/produtos",(req,res)=>{

 const {nome,preco,estoque} = req.body

 db.query(
  "INSERT INTO produtos (nome,preco,estoque) VALUES (?,?,?)",
  [nome,preco,estoque],
  (err,result)=>{
   if(err){
    console.error(err)
    res.status(500).send("Erro ao cadastrar")
    return
   }

   res.send("Produto cadastrado")
  }
 )

})

// 🔹 READ
app.get("/produtos",(req,res)=>{

 db.query("SELECT * FROM produtos",(err,result)=>{

  if(err){
   console.error(err)
   res.status(500).send("Erro")
   return
  }

  res.json(result)

 })

})

// 🔹 UPDATE (NOVO)
app.put("/produtos/:id", (req, res) => {

 const { estoque } = req.body
 const { id } = req.params

 db.query(
  "UPDATE produtos SET estoque = ? WHERE id = ?",
  [estoque, id],
  (err, result) => {
   if (err) {
    console.error(err)
    res.status(500).send("Erro ao atualizar")
    return
   }

   res.send("Estoque atualizado")
  }
 )

})

// 🔹 START SERVER
app.listen(3000,()=>{
 console.log("Servidor rodando na porta 3000")
})