import React from 'react';
import { StyleSheet, View } from 'react-native';
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/Itens';
import Topo from './componentes/Topo';




export default function Cesta({ topo, detalhes, itens}) {
    return <>

        <Topo {...topo} />
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
              
            
            <Itens {...itens} />
            
        </View>


    </>
}



const estilos = StyleSheet.create({

    cesta: {
        paddingVertical: 10,
        paddingHorizontal: 18,
    },

});