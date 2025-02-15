import React, { Component } from 'react';
import { TextInput, Button, Dimensions, Platform , Alert} from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar, View } from 'react-native'
import QuillEditor from 'react-native-quill-editor'
import {connect} from 'react-redux'
import { ChangeKnowledgeApi, GetKnowledgeApiById } from '../../API/apis';


const { width } = Dimensions.get('window');

const mapStateToProps = state => {
  return {
    // isLogin: state.User.isLogin,
    token: state.User.token,
    knowledgeId: state.GetKnowledgeId.knowledgeId
  }
}


class ChangeKnowledge extends Component {
  constructor() {
    super()
    this.state= {
      title: '',
      htmlData: '',
      describe: '',
    }
  }
  componentDidMount() {
    const coords = {
      token: this.props.token,
      knowledgeId: this.props.knowledgeId,
    }
    GetKnowledgeApiById(coords)
      .then(res=>res.json())
      .then((res) => {
        // 获取数据成功
        console.log(res.data);
        if (res.code == 1) {
          this.setState({
            title: res.data.title,
            describe: res.data.description,
            htmlData: res.data.content,
          })
          
        } else {
          Alert.alert('错误', '查找数据发生错误');
        }
      })
      .catch(err => {
        Alert.alert('报错', JSON.stringify(err));
      });
  }
  handleChangeKnowledge() {
    const coords = {
      token: this.props.token,
      knowledgeId: this.props.knowledgeId,
      title: this.state.title,
      describe: this.state.describe,
      htmlData: this.state.htmlData,
    }
    ChangeKnowledgeApi(coords)
      .then(res=>res.json())
      .then((res) => {
        // 获取数据成功
        // console.log(res);
        if (res.code == 1) {
          Alert.alert('成功', '保存成功');
        } else {
          Alert.alert('错误', '查找数据发生错误');
        }
      })
      .catch(err => {
        Alert.alert('报错', JSON.stringify(err));
      });
  }
  render() {
    const onChange = (html) => {
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
              defaultValue={this.state.htmlData}
              onChange={onChange}
              options={{
                placeholder: '请赋诗一首...',
              }}
            />
          </ScrollView>
          <Button
            title="保存"
            onPress={() => this.handleChangeKnowledge()}
            color={'blue'}
          />
        </SafeAreaView>
        
      </View>
      
    )
  }
}

export default connect(mapStateToProps, null)(ChangeKnowledge)

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
