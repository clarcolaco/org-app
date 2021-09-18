import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Texto from "../../../componentes/Texto";






export default function Item({ item: { nome, imagem } }) {
    return <View style={estilos.item}>
        <Image source={imagem} style={estilos.imagem} />
        <Texto style={estilos.nome}>{nome}</Texto>
    </View>
}



const estilos = StyleSheet.create({


    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 14,
        alignItems: "center",
        paddingVertical: 20,
        

    },
    imagem: {
        width: 46,
        height: 46,


    },
    nome: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 16,
        lineHeight: 26,
        color: "#464646",

    }

});