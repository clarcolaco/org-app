import React from 'react';
import { StyleSheet, View } from 'react-native';
import Detalhes from './componentes/Detalhes';
import MeuTextInput from './componentes/Input';
import Topo from './componentes/Topo';




export default function Cesta({ topo, detalhes}) {
    return <>

        <Topo {...topo} />
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            
            
            
            
            <MeuTextInput/>
            
        </View>


    </>
}



const estilos = StyleSheet.create({

    cesta: {
        paddingVertical: 10,
        paddingHorizontal: 18,
    },

});