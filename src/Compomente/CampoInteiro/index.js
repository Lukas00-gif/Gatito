import React from 'react';

import { TextInput } from 'react-native';
import estilos from './estilos';

import estilosPadrao from './estilos'

export default function CampoInteiro({valor, acao}){
    
    //consts para remover numero, e so colocar numero inteiros
    const atualiza = (novoValor, acaoretorno) =>{
        const VereficaInteiro = novoValor.match(/^[0-9]*$/);
        if (!VereficaInteiro) return;

        const RemoveZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');
        acaoretorno(RemoveZeroEsquerda)
    }

    
    const numeroemtexto = String(valor);

    // faz com que o valor seja mudado e alterado no app
    return <TextInput
        style = {[estilosPadrao.campo,estilos]}
        keyboardType = 'number-pad'
        selectTextOnFocus
        onChangeText = {(novoValor) => {atualiza(novoValor,acao)}}
        value = {numeroemtexto}
    />
}

