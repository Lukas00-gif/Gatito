import React, { useState } from 'react';

import {Text, View } from 'react-native';

import CampoInteiro from '../../../Compomente/CampoInteiro';
import Botao from '../../../Compomente/botao';
import estilos from './estilos';

export default function Item({nome, preco, descricao, quantidade:quantidadeInicial}){
        const[quantidade, setQuantidade] = useState(quantidadeInicial)
        const[total, setTotal] = useState(preco * quantidadeInicial)

        const atualizaQuantTotal = (novaQuantidade) => {
            setQuantidade(novaQuantidade);
            calculaTotal(novaQuantidade)
        }

        const calculaTotal = (novaQuantidade) => {
            setTotal(novaQuantidade * preco);
        }

    return<> 
        <View style = {estilos.informacao}>
            <Text style = {estilos.nome}>{nome}</Text>
            <Text style = {estilos.descricao}>{descricao}</Text>
            <Text style = {estilos.preco}> {
            Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL' }).format(preco)} </Text>
        </View>
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
                <Botao valor = "Remover do Carrinho" acao = {() => {}}/>
            </View>
        <View style = {estilos.divisor}/>
    </>
}



