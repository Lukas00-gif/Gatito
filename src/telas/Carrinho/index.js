import React from 'react';

import { FlatList } from 'react-native';

import Item from './item'
import TelaPadrao from '../../Compomente/TelaPadrao';
import StatusCarrinho from '../../Compomente/StatusCarrinho';

//seviços 
const servicos = [
    {
            id:1,
            nome: "Banho",
            preco: 79.50,
            descricao: "Realizamos a higiene do seu pet",
            quantidade: 1
    },
    {
            id:2,
            nome: "Vacina V4",
            preco: 178.50,
            descricao: "Imunize seu pet",
            quantidade: 2
    },
    {
            id:3,
            nome: "Vacina antirrabica",
            preco: 80.90,
            descricao: "Vacina da raiva",
            quantidade: 2
    }
]

// isso serve para o note do celular
export default function Carrinho(){  

   const total = servicos.reduce((soma, {preco,quantidade}) => soma + (preco*quantidade), 0)

    return <TelaPadrao>
            <StatusCarrinho total = {total}/>
                <FlatList
                        data={servicos}
                        renderItem = {({item}) => <Item {...item} /> }
                        keyExtractor = {({id}) => String(id)}
                />
            </TelaPadrao>
}

//fazendo um pequeno teste