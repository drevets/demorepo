import React, { Component } from 'react';
import { Alert, Button, View, StyleSheet } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton(){
    Alert.alert('You tapped the button!')
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title='Press me'
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title='Press me'
            color='#841584'
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title='this looks great!'
          />
          <Button
            onPress={this._onPressButton}
            title='OK!'
            color='#841584'
          />
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})