'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Navigator,
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column' ,   //纵向排列
    justifyContent: 'flex-start',  
    alignItems: 'stretch',  //全部靠上排列
  },
  items_layout: {
    flexDirection: 'row' ,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 13,
    borderColor:'#FFFFFF',
    borderBottomColor: '#EBEBEB',
    borderWidth: 1,
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
    width: 10,
    height: 15,
    marginRight: 5,
  },
  article: {
    color: '#333333',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  
});

var SuggestList = React.createClass({

  onclickd:function(titleName){
    this.props.navigator.push({
      id: 'Suggest',
      name: titleName,
      index: 1,
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

        <TouchableOpacity  
              onPress={()=>this.onclickd('投诉店家')}>          
          <View style={[styles.items_layout]}
                >
            <Image source={require('image!one')}
                style={styles.items_icon} />
            
            <Text style={styles.items_text}>
              投诉店家
            </Text>
            <Image source={require('image!ico_enter')}
                style={styles.items_icon_enter} />
          </View>
          </TouchableOpacity>

          <TouchableOpacity 
              onPress={()=>this.onclickd('投诉顾客')}>
              <View style={[styles.items_layout]}>
              <Image source={require('image!three')}
                  style={styles.items_icon} />         
              <Text style={styles.items_text}>
                投诉顾客
              </Text>
              <Image source={require('image!ico_enter')}
                  style={styles.items_icon_enter} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
              onPress={()=>this.onclickd('定位问题')}>
              <View style={[styles.items_layout]}>
                <Image source={require('image!two')}
                    style={styles.items_icon} />               
                <Text style={styles.items_text}>
                  定位问题
                </Text>
                <Image source={require('image!ico_enter')}
                    style={styles.items_icon_enter} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
              onPress={()=>this.onclickd('结算问题')}>          
              <View style={[styles.items_layout]}>

                <Image source={require('image!three')}
                    style={styles.items_icon} />
                
                <Text style={styles.items_text}>
                  结算问题
                </Text>

                <Image source={require('image!ico_enter')}
                    style={styles.items_icon_enter} />                 
              </View>
          </TouchableOpacity>

          <TouchableOpacity 
              onPress={()=>this.onclickd('其他产品问题')}>          
              <View style={[styles.items_layout]}>

                <Image source={require('image!four')}
                    style={styles.items_icon} />
                
                <Text style={styles.items_text}>
                  其他产品问题
                </Text>

                <Image source={require('image!ico_enter')}
                    style={styles.items_icon_enter} />                 
              </View>
          </TouchableOpacity>
      </View>
    );
  },
});

module.exports = SuggestList;