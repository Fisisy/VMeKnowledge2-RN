import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, ScrollView, Image, TouchableOpacity, Alert} from 'react-native'
import Ionicons from '@react-native-vector-icons/ionicons'

export default class index extends Component {
  render() {
    return (
      <SafeAreaView style= {[styles.container]}>
        <ScrollView>
          <View style = {[styles.avatar]}>
            <Image 
              source = {{uri: 'https://cdn.luogu.com.cn/upload/usericon/188155.png'}}
              style = {{
                width: 80,
                height: 80,
                marginVertical: 10,
                borderRadius:15,
              }}
            />
          </View>
          <TouchableOpacity onPress={() => Alert.alert('aaa')}>
              <View style = {[styles.listItem]}>
                <View style = {{flexDirection:'row'}}>
                  <Ionicons name={'settings-outline'} size= {20} color ={'#22d'}/>
                  <Text style = {{marginLeft: 10, fontSize: 18}}>设置</Text>
                </View>
                <Ionicons name={'chevron-forward-outline'} size= {20} color ={'#bbb'}/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
              <View style = {[styles.listItem]}>
                <View style = {{flexDirection:'row'}}>
                  <Ionicons name={'information-circle-outline'} size= {20} color ={'#2d3'}/>
                  <Text style = {{marginLeft: 10, fontSize: 18}}>关于</Text>
                </View>
                <Ionicons name={'chevron-forward-outline'} size= {20} color ={'#bbb'}/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <View style = {[styles.listItem]}>
                <View style = {{flexDirection:'row'}}>
                  <Ionicons name={'log-in-outline'} size= {20} color ={'green'}/>
                  <Text style = {{marginLeft: 10, fontSize: 18}}>登录</Text>
                </View>
                <Ionicons name={'chevron-forward-outline'} size= {20} color ={'#bbb'}/>
              </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('aaa')}>
              <View style = {[styles.listItem]}>
                <View style = {{flexDirection:'row'}}>
                  <Ionicons name={'log-out-outline'} size= {20} color ={'red'}/>
                  <Text style = {{marginLeft: 10, fontSize: 18}}>退出</Text>
                </View>
                <Ionicons name={'chevron-forward-outline'} size= {20} color ={'#bbb'}/>
              </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
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
