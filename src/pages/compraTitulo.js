import React from 'react';
import { StyleSheet , Text , TextInput, View }  from 'react-native';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from './colors';
import { useNavigation } from '@react-navigation/native';

export default function ComprarTitulo() {
    const data = [10, 11, 9, 12, 13, 15, 12, 14, 15, 17, 19, 16, 15, 18, 20]
    const contentInset = { top: 20, bottom: 20 }

    const navigation = useNavigation();

    const cadastrar = () => {
        alert('Operação Registrada')
    }
    const cancelar = () => {
        navigation.navigate('MeusAtivos')
        console.log('cancelar')
    }
    const vender = () => {
        navigation.navigate('vendertitulo')
        console.log('vender')
    }   
    const novotitulo = () => {
        navigation.navigate('cadastrartitulo')
        console.log('novo titulo')
    }

  return (
      <View style={{flex : 1 , backgroundColor:'black'}}>
        <View style={{flexDirection:'row' , justifyContent:'center'}}>
            <Text style={styles.textbotaoInativo}>Comprar</Text>
            <TouchableOpacity style={styles.botaoAtivo} onPress={novotitulo}>
                <Text style={styles.textBotaoAtivo}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoAtivo} onPress={vender}>
                <Text style={styles.textBotaoAtivo}>Vender</Text>
            </TouchableOpacity>
        </View>
        
        <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={5}
                    formatLabel={(value) => `${value}`}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={data}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={contentInset}
                >
                    <Grid />
                </LineChart>
            </View>
        <View style={styles.barra}/>
        <View>
            <Text style={styles.label}>Ticker</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.label}>Corretora</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.label}>Data</Text>
            <TextInput style={styles.input} keyboardType='numeric'/>
            <View style={styles.linha}>
                <View style={{width:'50%'}}>
                    <Text style={styles.label}>Preço</Text>
                    <TextInput style={styles.input} keyboardType='numeric'/>
                </View>
                <View style={{width:'50%'}}>
                    <Text style={styles.label}>Quantidade</Text>
                    <TextInput style={styles.input} keyboardType='numeric'/>
                </View>
            </View>
        </View>
        <View style={styles.espaco}/>
        <View style={{flexDirection:'row' , justifyContent:'center'} }>
            <TouchableOpacity style={styles.button} onPress={cadastrar}>
                <Text style={styles.buttonText}>Comprar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={cancelar}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    label: {
      fontSize:14,
      backgroundColor: colors.background,
      color: colors.textoPrincipal,
      margin:0,
      width:'70%',
      alignSelf:'center'
    },
    input: {
      borderWidth: 1,
      borderColor: colors.borda,
      color:'#fff',
      backgroundColor: '#000',
      borderRadius: 5,
      padding: 5,
      marginVertical: 0,
      width: '70%',
      alignSelf:'center',
    },
    button: {
      backgroundColor: colors.botaoPrincipal,
      borderRadius: 5,
      padding: 15,
      margin: 5,
      marginLeft: 20,
      marginRight: 20,
      alignSelf:'center',
      whidth:'45%'
    },
    buttonText: {
      color: colors.botaoTexto,
      fontWeight: 'bold',
      alignSelf:'center',
    },
    barra:{
        alignSelf:'center',
        width: '80%',
        marginTop: 10,
        marginBottom: 10,
        borderColor:'white',
        borderWidth:1
    },
    espaco:{
        marginTop: 10,
        marginBottom: 10
    },
    botaoAtivo:{
        backgroundColor: '#003399',
        borderRadius: 5,
        margin: 10,
        padding: 5,
    },
    textBotaoAtivo:{
        color: '#ffffff',
        fontSize: 20,
        margin: 0,
        padding: 0,
        borderRadius: 5,
        paddingHorizontal: 20

    },
    textbotaoInativo:{
        backgroundColor: '#222222',
        color: '#444444',
        fontSize:20,
        margin: 10,
        padding: 5,
        borderRadius: 5,
        paddingHorizontal: 30
    },
    linha: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
      }
  });


