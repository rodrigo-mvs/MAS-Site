fetch('produtos.json')
  .then(response => response.json())
  .then(data => mostrarProdutos(data))
  .catch(err => console.log('Erro: ' + err));

  function mostrarProdutos(data) {
    var containerPrincipal = document.getElementById("produtos");
  
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'ID: ' + data[i].id + '<br>Nome: ' + data[i].nome + '<br>Preco: ' + data[i].preco + '<br>Descrição: ' + data[i].descricao + '<br><img src="' + data[i].imagem + '">';
      containerPrincipal.appendChild(div);
    }
  }