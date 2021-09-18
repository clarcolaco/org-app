import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Texto from './Texto';

export default function Botao({ texto, onPress, style }) {
  return <TouchableOpacity style={[estilos.botao, style]} onPress={onPress}>
  <Texto style={estilos.textoBotao}>{ texto }</Texto>
</TouchableOpacity>
}

const estilos = StyleSheet.create({
    botao: {
        paddingVertical: 18,
        backgroundColor: "#2A9F85",
        width: "100%",
        fontWeight: "bold",
        marginTop: 18,
        lineHeight: 38,
        alignSelf: "center",
        borderRadius: 15,

    },
    textoBotao: {
        alignSelf: "center",
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 26,
    }
});