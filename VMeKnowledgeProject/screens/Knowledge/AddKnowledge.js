import React, { Component } from 'react';
import { Button, Dimensions, Platform , Alert} from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar, View } from 'react-native'
import QuillEditor from 'react-native-quill-editor'


export default class AddKnowledge extends Component {
  render() {
    const onChange = (html) => {
      console.log(html)
    }
    // const isIOS = Platform.OS === 'ios';
    // const source= isIOS ? require('../../../assets/quill.html') : { uri: 'file:///android_asset/quill.html' };
    // console.log(source)
    return (
      <View style={styles.body}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <QuillEditor
              style={{ height: 380 }}
              defaultValue=""
              onChange={onChange}
              options={{
                placeholder: '请赋诗一首...',
              }}
            />
          </ScrollView>
          <Button
            title="保存"
            onPress={() => {
              Alert.alert('我是一个按钮');
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
})
