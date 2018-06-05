import React, { Component } from 'react';
import {
  Alert,
  Text,
  TextInput,
  Image,
  View,
  StyleSheet,
  Button,
  ScrollView
} from 'react-native';

export default class HelloWorldApp extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <ScrollView>
      <View
        style={{
          padding: 10,
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
        <TextInput
          style={{ height: 40 }}
          placeholder="type here to translate"
          onChangeText={text => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(' ')
            .map(word => word && '🍕')
            .join(' ')}
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Press me"
            color="#841584"
          />
        </View>
        <Text>Hello World!</Text>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Text style={styles.red}>One thing</Text>
        <Text style={styles.bigBlue}>Another thing</Text>
        <Text style={[styles.bigBlue, styles.red]}>One more thing</Text>
        <Text style={[styles.red, styles.bigBlue]}>
          Oh, I almost forgot: another thing
        </Text>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  buttonContainer: {
    margin: 20
  }
});
