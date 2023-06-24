import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ tipo, quantidadeAcoes, ticket, precoAtual }) => {
    const valorTotal = (quantidadeAcoes * precoAtual).toFixed(2);

  return (

    <View style={styles.card}>
      <Text style={styles.data}>{tipo}</Text>
      <Text style={styles.data}>{ticket}</Text>

      <Text style={styles.preco}>R$ {precoAtual}</Text>

      <Text style={styles.data}>{quantidadeAcoes} unid.</Text>
      <Text style={styles.total}>R$ {valorTotal}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 4,
    margin: 2,
    shadowColor: '#222',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    width:130,
    borderRadius:10
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  data: {
    color:'#fff',
    fontSize: 14,
  },
  total: {
    color: '#fff',
    fontSize: 18,
  },
  preco: {
    color: '#fff',
    fontSize: 14,
  }
});

export default Card;