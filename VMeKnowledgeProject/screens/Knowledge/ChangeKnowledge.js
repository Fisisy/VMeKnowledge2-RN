import React, { Component } from 'react';
import { TextInput, Button, Dimensions, Platform , Alert} from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar, View } from 'react-native'
import QuillEditor from 'react-native-quill-editor'

const { width } = Dimensions.get('window');

export default class ChangeKnowledge extends Component {
  constructor() {
    super()
    this.state= {
      title: '我是一个标题，',
      htmlData: 'ugofdisjiodghrje',
    }
  }
  render() {
    const onChange = (html) => {
      // console.log(html)
      this.state.htmlData = html
    }
    // const isIOS = Platform.OS === 'ios';
    // const source= isIOS ? require('../../../assets/quill.html') : { uri: 'file:///android_asset/quill.html' };
    // console.log(source)
    return (
      <View style={styles.body}>
        <StatusBar barStyle="dark-content" />
        <View style = {styles.ItemContainer}> 
          <TextInput
            value={this.state.title}
            style={[styles.input]}
            placeholder="请输入标题"
            onChangeText={val => {
              this.setState({title: val});
            }}
          />
        </View>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <QuillEditor
              style={{ height: 310 }}
              defaultValue={this.state.htmlData}
              onChange={onChange}
              options={{
                placeholder: '请赋诗一首...',
              }}
            />
          </ScrollView>
          <Button
            title="保存"
            onPress={() => {
              console.log(this.state.title);
              console.log(this.state.htmlData);
              Alert.alert('保存成功');
            }}
            color={'blue'}
          />
        </SafeAreaView>
        
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f1f3f4',
    flex: 1,
  },
  input: {
    width: Dimensions.get('window').width - 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 5,
  },
  ItemContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    // padding: 50,
    width: width,
    marginBottom: 5,
    justifyContent: 'space-between',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    // 需要相对定位容器
    position: 'relative',
  },
})
