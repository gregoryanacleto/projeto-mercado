// 🔹 CADASTRAR PRODUTO
function salvarProduto(){

 fetch("http://localhost:3000/produtos",{
  method:"POST",
  headers:{
   "Content-Type":"application/json"
  },
  body:JSON.stringify({
   nome:document.getElementById("nome").value,
   preco:document.getElementById("preco").value,
   estoque:document.getElementById("estoque").value
  })
 })
 .then(()=>{
  alert("Produto cadastrado!")
  listarProdutos()
 })

}

// 🔹 LISTAR PRODUTOS + CAMPO PARA ATUALIZAR
function listarProdutos(){

 fetch("http://localhost:3000/produtos")
 .then(res=>res.json())
 .then(produtos=>{

  let html=""

  produtos.forEach(p=>{
 html += `
  <div>
    <strong>${p.nome}</strong><br>
    R$ ${p.preco} | estoque: ${p.estoque}<br><br>

    <input id="estoque-${p.id}" placeholder="Novo estoque">
    <button onclick="atualizarEstoque(${p.id})">Atualizar</button>
  </div>
 `
})

  document.getElementById("lista").innerHTML = html

 })

}

// 🔹 ATUALIZAR ESTOQUE
function atualizarEstoque(id){

 const novoEstoque = document.getElementById(`estoque-${id}`).value

 fetch(`http://localhost:3000/produtos/${id}`,{
  method:"PUT",
  headers:{
   "Content-Type":"application/json"
  },
  body: JSON.stringify({
   estoque: novoEstoque
  })
 })
 .then(()=>{
  alert("Estoque atualizado!")
  listarProdutos()
 })

}


function salvarCliente(){

 fetch("http://localhost:3000/clientes",{
  method:"POST",
  headers:{
   "Content-Type":"application/json"
  },
  body:JSON.stringify({
   nome:document.getElementById("clienteNome").value,
   email:document.getElementById("clienteEmail").value,
   telefone:document.getElementById("clienteTelefone").value
  })
 })
 .then(()=>{
  alert("Cliente cadastrado!")
  listarClientes()
 })

}


function listarClientes(){

 fetch("http://localhost:3000/clientes")
 .then(res=>res.json())
 .then(clientes=>{

  let html=""

  clientes.forEach(c=>{

   html += `
    <div class="cliente-card">

      <strong>${c.nome}</strong><br>
      ${c.email}<br>
      ${c.telefone}<br><br>

      <button onclick="excluirCliente(${c.id})">
       Excluir Cliente
      </button>

    </div>
    <br>
   `

  })

  document.getElementById("listaClientes").innerHTML = html

 })

}


function excluirCliente(id){

 fetch(`http://localhost:3000/clientes/${id}`,{
  method:"DELETE"
 })
 .then(()=>{
  alert("Cliente excluído!")
  listarClientes()
 })

}