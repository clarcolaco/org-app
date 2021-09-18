import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Texto from "../../../componentes/Texto";
import Botao from "../../../componentes/Botao";




export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {

    return <>
        <Texto style={estilos.nome}>
            {nome}
        </Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>
                {nomeFazenda}
            </Texto>
        </View>

        <Texto style={estilos.descricao}>
            {descricao}
        </Texto>
        <Texto style={estilos.preco}>
            {preco}
        </Texto>

        <Botao texto={botao} style={estilos.botao} onPress={() => {}} />


    </>

}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        fontWeight: "bold",
        lineHeight: 26,
        color: "#464646",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },

    imagemFazenda: {
        width: 32,
        height: 32,
    },

    nomeFazenda: {
        marginLeft: 12,
        fontSize: 20,
        lineHeight: 40,
        color: "#033003",

    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 14,
        lineHeight: 18,
        textAlign: "auto",
    },
    preco: {
        paddingVertical: 18,
        fontSize: 40,
        color: "#2A9F85",
        fontWeight: "bold",
        marginTop: 8,
        lineHeight: 38,
        alignSelf: "center",
    },
    botao: {
        marginTop: 16,}
});