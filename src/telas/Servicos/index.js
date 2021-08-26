import React from 'react';

import { SafeAreaView ,StatusBar,Text, FlatList } from 'react-native';

import Item from '../Servicos/item/index'

//seviços 
const servicos = [
    {
            id:1,
            nome: "Banho",
            preco: 79.50,
            descricao: "Realizamos a higiene do seu pet"
    },
    {
            id:2,
            nome: "Vacina V4",
            preco: 178.50,
            descricao: "Imunize seu pet"
    },
    {
            id:3,
            nome: "Vacina antirrabica",
            preco: 80.90,
            descricao: "Vacina da raiva"
    }
]

// isso serve para o note do celular
export default function Servicos(){  
    return <SafeAreaView>
            <StatusBar/>
             <Text> Servicos! </Text>
             <FlatList
                data={servicos}
                renderItem = {({item}) => <Item {...item} /> }
             />
            </SafeAreaView>
}