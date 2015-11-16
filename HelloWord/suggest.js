'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Component,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  ToastAndroid,
  BackAndroid,
} = React;

var data = null;


 

var Suggest = React.createClass( {

  onclickd:function(){
    ToastAndroid.show('111111', ToastAndroid.SHORT);
    this.props.navigator.push({
      id: 'SuggestList',
      name: '主页11',
    });
  },

  render:function() {
    BackAndroid.addEventListener('hardwareBackPress', function() {
    this.goBack();
    ToastAndroid.show('111111', ToastAndroid.SHORT);

  });
    return (

      <Navigator
          renderScene={this.renderScene.bind(this)}/>

    );
  },
  renderScene:function(route, navigator) {

    return (
        
      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity  
                onPress={()=>this.onclickd()}>   
        <Text style={{color: 'white', fontSize: 32,}}>this.data</Text>
</TouchableOpacity>
      </View>
      
    );
  },
  
});


module.exports = Suggest;