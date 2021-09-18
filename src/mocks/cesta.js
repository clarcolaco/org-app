import logo from '../../assets/logo.png';
import abobora from '../../assets/frutas/Abobora.png';
import batata from '../../assets/frutas/Batata.png';
import brocolis from '../../assets/frutas/Brocolis.png';
import pepino from '../../assets/frutas/Pepino.png';
import tomate from '../../assets/frutas/Tomate.png';





const cesta = {
    topo: {
        titulo: "Detalhes da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        nomeFazenda: " Jenny Jack Farm",
        logoFazenda: logo,
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha.",
        preco: "R$ 50,00",
        botao: "Comprar",
    },
    itens: {
        tituloItens: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Brócolis",
                imagem:  brocolis,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },

        ]
    }

}

export default cesta;