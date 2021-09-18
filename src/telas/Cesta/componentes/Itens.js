import React from "react";
import { Image } from "react-native";
import Texto from "../../../componentes/Texto";


export default function Itens({ tituloItens, lista }) {

    return <>

        <Texto>
            {tituloItens}
        </Texto>


        {lista.map(({ nome, imagem }) => {

            return <View key={nome}>
                <Texto >{nome}</Texto>
                <Image source={imagem} />
            </View>
        })
        }




    </>

}



