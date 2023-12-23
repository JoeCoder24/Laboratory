import { Text, View, ScrollView, StyleSheet, TextInput, Button } from 'react-native'
import React, { PureComponent } from 'react'

export default class Main extends PureComponent {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Welcome to the Labrotary!</Text>
        </View>
        <View style={styles.container}>
          <TextInput defaultValue='enter something' />
          <Button title='string'>Submit</Button>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    paddingTop: 20,
    marginTop: 200
  },
});
