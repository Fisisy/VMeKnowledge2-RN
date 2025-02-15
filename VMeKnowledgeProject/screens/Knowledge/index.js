import React, { Component } from 'react'
import { Text, StyleSheet, SafeAreaView, Dimensions, FlatList, View , TouchableOpacity, Alert} from 'react-native'
import Ionicons from '@react-native-vector-icons/ionicons'
import {connect} from 'react-redux'
import { GetKnowledgeApi, GetKnowledgeApiById } from '../../API/apis';
import {GetKnowledgeId} from '../../redux/actions/GetKnowledgeId'


const { width } = Dimensions.get('window');
const ITEM_SPACING = 5;
const ITEM_WIDTH = (width - ITEM_SPACING * 3) / 2;

const mapStateToProps = state => {
  return {
    // num: state.Counter.num,
    token: state.User.token,
    knowledgeId: state.GetKnowledgeId.knowledgeId,
  }
}

class index extends Component {
  
  constructor() {
    super();
    this.state = {
      isLoading: false,
      selectedId: null,
      deleteId: 0,
      list: [],
    };
  }
  // handleList = (ListData) => {
  //   this.state.list = ListData;
  // }
  componentDidMount() {
    const coords = {
      token: this.props.token,
    }
    GetKnowledgeApi(coords)
      .then(res=>res.json())
      .then((res) => {
        // console.log(res.data);
        if (res.code == 1) {
          this.setState(
            (prevState) => ({
              list: [...prevState.list, ...res.data], // 将现有列表和新数据合并
            }),
            () => {
              // 这里是 setState 的回调函数，状态更新后会执行
              // console.log(this.state.list); // 打印更新后的列表
            }
          );
        } else {
          Alert.alert('错误', '查找数据发生错误');
        }
      })
      .catch(err => {
        Alert.alert('报错', JSON.stringify(err));
      });
  }
  handleDeleteKnowledge() {
    console.log(this.props.token);
    console.log(this.state.deleteId);
    const coords = {
      token: this.props.token,
      knowledgeId: this.state.deleteId,
    }
    
  }
  renderItem = ({index, item}) => {
    // console.log(item);
    const backgroundColor =
      item.id === this.state.selectedId ? '#dfb' : '#fff';
    return (
      <TouchableOpacity
        style={[styles.listContainer, {backgroundColor}]}
        onPress={() => {
          this.setState({selectedId: item.id});
          this.props.navigation.navigate('ChangeKnowledge');
          this.props.GetKnowledgeId(item.id);
        }}
        onLongPress={() => 
          Alert.alert(
            '提示',
            '确定要删除吗?',
            [
                {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: '确定', onPress: () => console.log('OK Pressed')},
            ]
        )}
        // selectable={true}
        >
        {/* 左上角标题 */}
        <Text style={styles.title}>{item.title}</Text>

        {/* 居中内容 */}
        <View style={styles.centerContainer}>
          <Text style={styles.itemData}>{item.description}</Text>
        </View>

        {/* 右下角时间 */}
        <Text style={styles.time}>{item.createTime.substring(0, 10)}</Text>

      </TouchableOpacity>
    );
  };
  loadData = () => {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      const coords = {
        token: this.props.token,
      }
      //模拟请求数据
      this.setState({isLoading: false});
      GetKnowledgeApi(coords)
      .then(res=>res.json())
      .then((res) => {
        // console.log(res.data);
        if (res.code == 1) {
          this.setState(
            (prevState) => ({
              list: res.data, // 将现有列表和新数据合并
            }),
            () => {
              // 这里是 setState 的回调函数，状态更新后会执行
              // console.log(this.state.list); // 打印更新后的列表
            }
          );
        } else {
          Alert.alert('错误', '查找数据发生错误');
        }
      })
      .catch(err => {
        Alert.alert('报错', JSON.stringify(err));
      });
      
    }, 2000);
  };
  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddKnowledge')}>
            <View style = {[styles.listItem]}>
              <View style = {{flexDirection:'row'}}>
                <Ionicons name={'add-circle-outline'} size= {20} color ={'#22d'}/>
                <Text style = {{marginLeft: 10, fontSize: 18}}>添加新知识</Text>
              </View>
              <Ionicons name={'chevron-forward-outline'} size= {20} color ={'#bbb'}/>
            </View>
        </TouchableOpacity>

        <FlatList
          data={this.state.list}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          horizontal={false} //是否水平布局模式
          initialScrollIndex={0} //初始化时滚动的索引位置
          initialNumToRender={4} // 指定初始渲染数据的数量，一般数量要填满一屏幕
          numColumns={2} // 设置展示多少列 数据项必须等高，无法支持瀑布流
          inverted={false} //反转列表
          extraData={this.state.selectedId}
          columnWrapperStyle={styles.columnWrapper}
          // ItemSeparatorComponent={() => {
          //   //声明项目之间的分割符
          //   return <View style={[styles.itemSeparator]} />;
          // }}
          ListEmptyComponent={() => {
            //列表数据为空时展示组件
            return <Text style={{fontSize: 30}}>空空如也</Text>;
          }}
          //下拉刷新
          refreshing={this.state.isLoading}
          onRefresh={this.loadData}
          // 上拉加载 
          // onEndReachedThreshold设置列表触底还剩多少刷新0.1表示列表还剩10%的时候刷新
          // onEndReachedThreshold={0.1}
          // onEndReached={() => {
          //   //此处为上拉加载的具体逻辑代码
          //   Alert.alert('到底了');
          // }}
          // ListHeaderComponent={() => {
          //   //声明列表的头部组件
          //   return <Text style={[styles.header]}>列表头部</Text>;
          // }}
          // ListFooterComponent={() => {
          //   //声明列表的头部组件
          //   return <Text style={[styles.footer]}>没有更多了</Text>;
          // }}
        />
      </SafeAreaView>
    )
  }
}

export default connect(mapStateToProps, {GetKnowledgeId})(index)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start'
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
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
  },
  flatContainer: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#fff',
    height: 100,
    // width: ITEM_WIDTH,
    width: '100%',
    fontSize: 50,
    textAlign: 'center',
    verticalAlign: 'middle',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 1,
    marginHorizontal: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  time: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    fontSize: 13,
    color: '#95a5a6',
    fontWeight: '500',
  },
  title: {
    position: 'absolute',
    top: 16,
    left: 16,
    fontSize: 17,
    fontWeight: '600',
    color: '#2c3e50',
  },
  itemData: { // 项目内容样式
    fontSize: 15,
    color: '#34495e',
    lineHeight: 22,
    opacity: 0.9,
    textAlign: 'center',
  },
  itemSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  footer: {fontSize: 30, textAlign: 'center'},
  listContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    // padding: 50,
    width: ITEM_WIDTH,
    marginBottom: 5,
    minHeight: 120,
    justifyContent: 'space-between',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    // 需要相对定位容器
    position: 'relative',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // 防止内容与边角元素重叠
    marginVertical: 24,
  },
})
