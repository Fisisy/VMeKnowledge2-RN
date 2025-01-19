import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class Flex extends Component {
  render() {
    return (
      <View>
        <Text style = {[styles.h2]}> 项目在主轴的尺寸占比 </Text>
        <ScrollView>
        <View>
          <Text style = {[styles.h3]}> flexRow 1:1:1 </Text>
          <View style = {[styles.container, styles.flexRow]}>
            <Text style = {[styles.itemBase, {flex: 1}]}> 刘备 </Text>
            <Text style = {[styles.itemBase, {flex: 1}]}> 关羽 </Text>
            <Text style = {[styles.itemBase, {flex: 1}]}> 张飞 </Text>
          </View>
        </View>
        <View>
          <Text style = {[styles.h3]}> flex 1:2:3 </Text>
          <View style = {[styles.container, styles.flexRow]}>
            <Text style = {[styles.itemBase, {flex: 1}]}> 刘备 </Text>
            <Text style = {[styles.itemBase, {flex: 2}]}> 关羽 </Text>
            <Text style = {[styles.itemBase, {flex: 3}]}> 张飞 </Text>
          </View>
        </View>
        <View>
          <Text style = {[styles.h3]}> flexColumn 1:1:2 </Text>
          <View style = {[styles.container, styles.flexColumn]}>
            <Text style = {[styles.itemBase, {flex: 1}]}> 刘备 </Text>
            <Text style = {[styles.itemBase, {flex: 1}]}> 关羽 </Text>
            <Text style = {[styles.itemBase, {flex: 1}]}> 张飞 </Text>
          </View>
        </View>
        <View>
          <Text style = {[styles.h3]}> flexColumn 1:2:3 </Text>
          <View style = {[styles.container, styles.flexColumn]}>
            <Text style = {[styles.itemBase, {flex: 1}]}> 刘备 </Text>
            <Text style = {[styles.itemBase, {flex: 2}]}> 关羽 </Text>
            <Text style = {[styles.itemBase, {flex: 3}]}> 张飞 </Text>
          </View>
        </View>
        <View>
          <Text style = {[styles.h3]}> flexDirection: 'row-reverse' </Text>
          <View style = {[styles.container, styles.flexRowReverse]}>
            <Text style = {[styles.itemBase]}> 刘备 </Text>
            <Text style = {[styles.itemBase]}> 关羽 </Text>
            <Text style = {[styles.itemBase]}> 张飞 </Text>
          </View>
        </View>
        <View>
          <Text style = {[styles.h3]}> flexDirection: 'row-reverse' </Text>
          <View style = {[styles.container, styles.flexRowReverse]}>
            <Text style = {[styles.itemBase]}> 刘备 </Text>
            <Text style = {[styles.itemBase]}> 关羽 </Text>
            <Text style = {[styles.itemBase]}> 张飞 </Text>
          </View>
        </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  h2: {
    fontSize: 30,
    marginHorizontal: 10
  },
  h3: {
    fontSize: 24,
    marginHorizontal: 10
  },
  itemBase: {
    height: 30,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#dfb',
    padding: 4,
    textAlign: 'center'
  },
  flexColumn: {
    flexDirection: 'column'
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse'
  }, 
  flexRow: {
    flexDirection: 'row'
  }, 
  flexRowReverse: {
    flexDirection: 'row-reverse'
  }
})
