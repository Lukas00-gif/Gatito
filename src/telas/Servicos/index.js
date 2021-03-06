import React from 'react';

import { FlatList } from 'react-native';

import Item from './item'
import TelaPadrao from '../../Compomente/TelaPadrao';

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
    return <TelaPadrao>
                <FlatList
                        data={servicos}
                        renderItem = {({item}) => <Item {...item} /> }
                        keyExtractor = {({id}) => String(id)}
                />
            </TelaPadrao>
}

//fazendo um pequeno teste