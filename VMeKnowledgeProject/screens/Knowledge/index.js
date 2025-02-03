import React, { Component } from 'react'
import { Text, StyleSheet, View , TouchableOpacity, Alert} from 'react-native'
import Ionicons from '@react-native-vector-icons/ionicons'

export default class index extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('AddKnowledge')}>
          <View style = {[styles.listItem]}>
            <View style = {{flexDirection:'row'}}>
              <Ionicons name={'settings-outline'} size= {20} color ={'#22d'}/>
              <Text style = {{marginLeft: 10, fontSize: 18}}>添加新知识</Text>
            </View>
            <Ionicons name={'chevron-forward-outline'} size= {20} color ={'#bbb'}/>
          </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start'
  },
  avatar: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    height: 50,
    paddingHorizontal: 20,
  }
})
