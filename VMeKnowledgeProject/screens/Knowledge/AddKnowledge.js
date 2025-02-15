import React, { Component } from 'react';
import { TextInput, Button, Dimensions, Platform , Alert} from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar, View } from 'react-native'
import QuillEditor from 'react-native-quill-editor'
import {connect} from 'react-redux'
import {AddKnowledgeApi} from '../../API/apis'


const { width } = Dimensions.get('window');

const mapStateToProps = state => {
  return {
    // num: state.Counter.num,
    token: state.User.token
  }
}

class AddKnowledge extends Component {
  constructor() {
    super()
    this.state= {
      title: '',
      htmlData: '',
      describe: '',
    }
  }
  handleAddKnowledge = () => {
    console.log(this.props.token);
    console.log(this.state.title);
    console.log(this.state.describe);
    console.log(this.state.htmlData);
    const coords= {
      token: this.props.token,
      title: this.state.title,
      describe: this.state.describe,
      htmlData: this.state.htmlData,
    }
    if (coords.title == '') {
      Alert.alert('错误', '标题不能为空');
      return;
    }
    if (coords.describe == '') {
      Alert.alert('错误', '文章描述不能为空');
      return;
    }
    AddKnowledgeApi(coords)
      .then(res=>res.json())
      .then((res) => {
        // 获取数据成功
        console.log(res);
        if (res.code == 1) {
          Alert.alert('成功', '保存成功');
          // this.props.loginSuccess(res.data);
        } else {
          Alert.alert('错误', '保存发生错误');
        }
      })
      .catch(err => {
        Alert.alert('报错', JSON.stringify(err));
      });
    
  }
  render() {
    const onChange = (html) => {
      // console.log(html)
      this.state.htmlData = html
    }
    // const isIOS = Platform.OS === 'ios';
    // const source= isIOS ? require('../../../assets/quill.html') : { uri: 'file:///android_asset/quill.html' };
    
    // 
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
          <TextInput
            value={this.state.describe}
            style={[styles.input]}
            placeholder="文章描述"
            onChangeText={val => {
              this.setState({describe: val});
            }}
          />
        </View>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <QuillEditor
              style={{ height: 310 }}
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
              
              this.handleAddKnowledge();
            }}
            color={'blue'}
          />
        </SafeAreaView>
        
      </View>
      
    )
  }
}

export default connect(mapStateToProps, null)(AddKnowledge)

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
