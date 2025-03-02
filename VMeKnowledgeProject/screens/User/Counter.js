import React, { Component } from 'react'
import { Text, StyleSheet, View , Button } from 'react-native'
import {connect} from 'react-redux'
import {increment, decrement} from '../../redux/actions/couter'

const mapStateToProps = state => {
  return {
    num: state.Counter.num,
    token: state.User.token
  }
}

class Counter extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Button title={'-'} onPress={() => this.props.decrement(1)} />
          <Text>{this.props.num}</Text>
        <Button title={'+'} onPress={() => this.props.increment(1)} />
        <Text>{this.props.token}</Text>
      </View>
      
    );
  }
}

export default connect(mapStateToProps, {increment, decrement})(Counter)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});