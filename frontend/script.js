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
alert("Produto cadastrado!");
listarProdutos();
})

}

function listarProdutos(){

fetch("http://localhost:3000/produtos")
.then(res=>res.json())
.then(produtos=>{

let html=""

produtos.forEach(p=>{
html += p.id + " - " + p.nome + " | R$" + p.preco + " | estoque: " + p.estoque + "<br>"
})

document.getElementById("lista").innerHTML = html

})

}
