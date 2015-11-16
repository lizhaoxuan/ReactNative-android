'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
  TouchableOpacity,
  Navigator,
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column' ,   //纵向排列
    justifyContent: 'flex-start',  
    alignItems: 'stretch',  //全部靠上排列
    backgroundColor: '#EBEBEB',  //背景浅灰色
  },
  items_layout: {
    flexDirection: 'row' ,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 13
  },
  items_text: {
    flex : 1,
    fontSize: 18,
    color: '#333333',
    marginLeft: 15,
  },
  items_icon: {
    width: 30,
    height: 30 ,
    marginLeft: 5,
  },
  items_icon_enter:{
    width: 20,
    height: 30,
    marginRight: 5,
  },
  article: {
    color: '#333333',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
    paddingVertical: 20
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333333',
    paddingHorizontal: 25,
    paddingVertical: 10
  }
  
});

var SuggestList = React.createClass({

  onclickd:function(titleName){
    this.props.navigator.push({
      id: 'Suggest',
      name: '主页',
    });
  },

  render:function(){
    return (
        <Navigator
          renderScene={this.renderScene.bind(this)} />

    );
  },




  renderScene:function(route, navigator) {
    return (
      <View style={styles.container}>
        <View style={[styles.items_layout,{backgroundColor: '#3993cf',}]}>
          <Image source={{uri: 'http://img.blog.csdn.net/20151115001827401'}}
              style={ {width: 15,
              height: 30 ,
              marginLeft: 5,}} />
          <Text style={[styles.items_text ,{ alignSelf:'center',fontSize: 20, }]}>
            投诉
          </Text>
        </View>
        <TouchableOpacity  
              onPress={()=>this.onclickd('配送投诉')}>          
          <View style={[styles.items_layout,{marginTop: 20 }]}
                >
            <Image source={{uri: 'http://img.blog.csdn.net/20151114235727840'}}
                style={styles.items_icon} />
            
            <Text style={styles.items_text}>
              配送投诉
            </Text>
            <Image source={{uri: 'http://img.blog.csdn.net/20151114235716611'}}
                style={styles.items_icon_enter} />
          </View>
          </TouchableOpacity>
          <TouchableOpacity 
              onPress={()=>this.onclickd('提现投诉')}>
              <View style={[styles.items_layout,{marginTop: 15 }]}>
              <Image source={{uri: 'http://img.blog.csdn.net/20151114235738348'}}
                  style={styles.items_icon} />         
              <Text style={styles.items_text}>
                提现投诉
              </Text>
              <Image source={{uri: 'http://img.blog.csdn.net/20151114235716611'}}
                  style={styles.items_icon_enter} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
              onPress={()=>this.onclickd('商家投诉')}>
              <View style={[styles.items_layout,{marginTop: 15 }]}>
                <Image source={{uri: 'http://img.blog.csdn.net/20151114235825918'}}
                    style={styles.items_icon} />               
                <Text style={styles.items_text}>
                  商家投诉
                </Text>
                <Image source={{uri: 'http://img.blog.csdn.net/20151114235716611'}}
                    style={styles.items_icon_enter} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
              onPress={()=>this.onclickd('客服投诉')}>          
              <View style={[styles.items_layout,{marginTop: 15 }]}>

                <Image source={{uri: 'http://img.blog.csdn.net/20151114235802120'}}
                    style={styles.items_icon} />
                
                <Text style={styles.items_text}>
                  客服投诉
                </Text>

                <Image source={{uri: 'http://img.blog.csdn.net/20151114235716611'}}
                    style={styles.items_icon_enter} />                 
              </View>
          </TouchableOpacity>
      </View>
    );
  },
});

module.exports = SuggestList;