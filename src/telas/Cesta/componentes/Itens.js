import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Texto from "../../../componentes/Texto";


export default function Itens({ tituloItens, lista }) {

    return <>


        <Texto style={estilos.titulo}>
            {tituloItens}
        </Texto>


        {lista.map(({ nome, imagem }) => {

            return <View key={nome} style={estilos.item}>
                <Image source={imagem} style={estilos.imagem} />
                <Texto style={estilos.texto}>{nome}</Texto>
                
            </View>
        })
        }




    </>

}



const estilos = StyleSheet.create({

    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 12,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    item: {
        flexDirection: "row",
        justifyContent: "flex-start",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical:16,
        alignItems: "center",
        
    },
    imagem: {
    width:46,
    height: 46,
    
    
    },
    texto:{
        marginLeft: 10,
        fontSize: 16,
        lineHeight:26,
        color: "#464646",
        
    }

});