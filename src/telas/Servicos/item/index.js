import React, { useState } from 'react';

import {Text, TouchableOpacity, View } from 'react-native';

import CampoInteiro from '../../../Compomente/CampoInteiro';
import Botao from '../../../Compomente/botao';
import estilos from './estilos';

export default function Item({nome, preco, descricao}){
        const[quantidade, setQuantidade] = useState(1)
        const[total, setTotal] = useState(preco)
        const [expandir, setExpandir] = useState(false)

        const atualizaQuantTotal = (novaQuantidade) => {
            setQuantidade(novaQuantidade);
            calculaTotal(novaQuantidade)
        }

        const calculaTotal = (novaQuantidade) => {
            setTotal(novaQuantidade * preco);
        }

        const invertiExpandir = () => {
            setExpandir(!expandir);
            atualizaQuantTotal(1);
        }

    return<> 
        <TouchableOpacity style = {estilos.informacao} onPress = {invertiExpandir}>
            <Text style = {estilos.nome}>{nome}</Text>
            <Text style = {estilos.descricao}>{descricao}</Text>
            <Text style = {estilos.preco}> {
            Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL' }).format(preco)} </Text>
        </TouchableOpacity>
        {expandir &&
            <View style = {estilos.carrinho}>
                <View>
                    <View style = {estilos.valor}> 
                        <Text style = {estilos.descricao}> Quantidade: </Text>
                        <CampoInteiro valor = {quantidade} acao = {atualizaQuantTotal}/>
                    </View>

                    <View style = {estilos.valor}> 
                        <Text style = {estilos.descricao}> Total: </Text>
                        <Text style = {estilos.preco}>{Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL' }).format(total)}</Text>
                    </View>
                </View>
                <Botao valor = "Adicionar" acao = {() => {}}/>
            </View>
}
        <View style = {estilos.divisor}/>
    </>
}



