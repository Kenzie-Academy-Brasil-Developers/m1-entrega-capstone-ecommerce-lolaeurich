const data = [
    {
      id: 1,
      img: "../img/yakult.png",
      nameItem: "Suco de Maçã Yakult",
      description:
        "◆ Suco de maçã concentrado e com aroma natural de maçã. NÃO CONTÉM GLÚTEN.",
      value: 3.99,
      addCart: "Compre agora!",
      tag: ["Petiscos"],
    },
    {
      id: 2,
      img: "../img/biscoito.jpg",
      nameItem: "Biscoito Naturnes",
      description:
        "◆ Biscoito morango e banana Nestlé Naturnes Nutrisnack com 42 gramas.",
      value: 5.98,
      addCart: "Compre agora!",
      tag: ["Petiscos"],
    },
    {
      id: 3,
      img: "../img/remedios.jpeg",
      nameItem: "Embalagens de Remédio",
      description:
        "◆ Esqueça Fischer Price! Seu filho ama mesmo são embalagens vazias de remédio.",
      value: 0.01,
      addCart: "Compre agora!",
      tag: ["Brinquedos"],
    },
    {
      id: 4,
      img: "../img/prendedores.webp",
      nameItem: "Prendedor de Roupa",
      description:
        "◆ Seguro? Não! Mas seu filho prefere um belo prendedor à brinquedos caros. Aposte!",
      value: 3.99,
      addCart: "Compre agora!",
      tag: ["Brinquedos"],
    },
    {
      id: 5,
      img: "../img/copo.jpg",
      nameItem: "Copo de Treinamento",
      description:
        "◆ Torne o seu filho uma criança independente e deixa ele encher a cara sozinho!",
      value: 39.99,
      addCart: "Compre agora!",
      tag: ["Utilidades"],
    },
    {
      id: 6,
      img: "../img/body.jpg",
      nameItem: "Body do Pink Floyd",
      description:
        "◆ Para você começar desde já a fazer escolhas musicais pelo seu filho. Imperdível!",
      value: 34.99,
      addCart: "Compre agora!",
      tag: ["Looks"],
    },
  ];
  

  let itensNoCarrinho = []

  const bodyDom = document.querySelector(`body`)
  

  function adicionaAoCarrinho (produto) {
      console.log('funcao addtocart', produto);
      console.log('itensnocarrinho', itensNoCarrinho.length);

      for(let i = 0; i < itensNoCarrinho.length; i++){
        if(itensNoCarrinho[i].id === produto.id){
            return
        }
    }
        itensNoCarrinho.push(produto)

    
      bodyDom.appendChild(criarAside())   
  }

  function removerDoCarrinho (produto) {
    console.log('funcao addtocart', produto);
    console.log('itensnocarrinho', itensNoCarrinho.length);

    for(let i = 0; i < itensNoCarrinho.length; i++){
        if(itensNoCarrinho[i].id === produto.id){
            itensNoCarrinho.pop(itensNoCarrinho[i])
        }
    }

    bodyDom.appendChild(criarAside())   
  }




  function criarHeader (){

    const header = document.createElement("header")
    const navegacao = document.createElement("nav")

    navegacao.className = "menu"
    header.appendChild(navegacao)

    const titulo = document.createElement("h1")
    titulo.innerHTML = `Lojinha Marota da Iris`
    navegacao.appendChild(titulo)

    const logo = document.createElement("img")
    logo.src = "../img/logo.svg"
    navegacao.appendChild(logo)

    const menu = document.createElement("ul")
    const liPetiscos = document.createElement("li")
    const liBrinquedos = document.createElement("li")
    const liUtilidades = document.createElement("li")
    const liLooks = document.createElement("li")

    navegacao.appendChild(menu)
    menu.appendChild(liPetiscos)
    menu.appendChild(liBrinquedos)
    menu.appendChild(liUtilidades)
    menu.appendChild(liLooks)
  

    liPetiscos.innerHTML = `Petiscos`
    liBrinquedos.innerHTML = `Brinquedos`
    liUtilidades.innerHTML = `Utilidades`
    liLooks.innerHTML = `Looks`    
    
    return header
}


  function criarLista (produtosRecebidos) {

    const main = document.createElement("main")

    const section = document.createElement("section")
    section.className = "card"

    main.appendChild(section)

    const lista = document.createElement("ul")
    lista.className = "lista"

    section.appendChild(lista)

    for(let i = 0; i < produtosRecebidos.length; i++){
        const  produtoAtual = produtosRecebidos[i]    

    const itens = document.createElement("li")
    itens.className = "cardProduct"

    lista.appendChild(itens)

    const divDeImagem = document.createElement("div")
    divDeImagem.className = "imagem"

    itens.appendChild(divDeImagem)

    const imagem = document.createElement("img")
    imagem.src = produtoAtual.img

    divDeImagem.appendChild(imagem)

    const divDeInformacoes = document.createElement("div")
    divDeInformacoes.className = "informacoes"

    itens.appendChild(divDeInformacoes)

    const divDeCategoria = document.createElement("div")
    divDeCategoria.className = "categoria"
    divDeCategoria.innerHTML = produtoAtual.tag

    divDeInformacoes.appendChild(divDeCategoria)

    const nomeDoItem = document.createElement("h3")
    nomeDoItem.innerHTML = produtoAtual.nameItem

    const descricao = document.createElement("p")
    descricao.innerHTML = produtoAtual.description

    nomeDoItem.appendChild(descricao)
    divDeInformacoes.appendChild(nomeDoItem)

    const preco = document.createElement("h4")
    preco.innerHTML = `R$ ${produtoAtual.value}`

    divDeInformacoes.appendChild(preco)

    const botaoDeAdd = document.createElement("button")
    botaoDeAdd.className = "adicionar"
    botaoDeAdd.innerHTML = `Compre agora!`
    botaoDeAdd.addEventListener('click', () => adicionaAoCarrinho(produtoAtual))
    
    divDeInformacoes.appendChild(botaoDeAdd)
    lista.appendChild(itens)
    
    }
return main    
}


//criando meu ASIDE



function criarAside (){
   let soma = 0
    let asideAntigo = document.getElementById('aside')
    if(asideAntigo !== null){
      bodyDom.removeChild(asideAntigo)
    }

    const aside = document.createElement("aside")
    aside.id = 'aside'

    const divDePesquisa = document.createElement("div")
    divDePesquisa.className = "pesquisa"

    aside.appendChild(divDePesquisa)


    const campoDePesquisa = document.createElement("input")
    campoDePesquisa.type = "text"
    campoDePesquisa.placeholder = `O que você procura?`

    const botaoDePesquisa = document.createElement("button")
    botaoDePesquisa.innerHTML = `Procurar`

    divDePesquisa.appendChild(campoDePesquisa)
    divDePesquisa.appendChild(botaoDePesquisa)

    const nomeDoCarrinho = document.createElement("h2")
    const carrinhoDeCompras = document.createElement("div")
    carrinhoDeCompras.className = "carrinho-de-produtos"
    const listaCompras = document.createElement("div")

    for(let i = 0; i < itensNoCarrinho.length; i++){  
        soma += itensNoCarrinho[i].value
        console.log(soma);

        const produtosComprados = document.createElement("li")
        console.log(produtosComprados);

        const imagemDosProdutosComprados = document.createElement("img")
        const novaLista2 = document.createElement("h3")
        const novaLista3 = document.createElement("h4")

        produtosComprados.appendChild(imagemDosProdutosComprados)
        produtosComprados.appendChild(novaLista2)
        produtosComprados.appendChild(novaLista3)

        produtosComprados.className = "adicionados"
        imagemDosProdutosComprados.src = itensNoCarrinho[i].img
        novaLista2.innerHTML = itensNoCarrinho[i].nameItem
        novaLista3.innerHTML = `R$ ${itensNoCarrinho[i].value}`
        // produtosComprados.innerHTML = 'eu existo'

        const botaoRemover = document.createElement('button')
        botaoRemover.className = "botao-remover"
        botaoRemover.innerHTML = "Remover"
        botaoRemover.addEventListener('click', () => removerDoCarrinho(itensNoCarrinho[i]))
        listaCompras.appendChild(produtosComprados)
        listaCompras.appendChild(botaoRemover)

    }

    carrinhoDeCompras.appendChild(listaCompras)
    nomeDoCarrinho.className = "nomeDoCarrinho"
    nomeDoCarrinho.innerHTML = `Carrinho de compras`


    aside.appendChild(nomeDoCarrinho)
    aside.appendChild(carrinhoDeCompras)

    const quantidade = document.createElement("h2")
    quantidade.id = "quantidade"
    quantidade.innerHTML = `Quantidade: ${itensNoCarrinho.length}`

    const total = document.createElement("p")
    total.className = "total"
    total.innerHTML = `Total: R$ ${soma}`

    aside.appendChild(quantidade)
    quantidade.appendChild(total)


    return aside
}

//colocando tudo dentro do meu body



    const header = criarHeader()
    const listaDeProdutos = criarLista(data)
    const aside = criarAside()
    bodyDom.appendChild(header)
    bodyDom.appendChild(listaDeProdutos)
    bodyDom.appendChild(aside)    

