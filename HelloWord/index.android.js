/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');


var Suggest = require('./suggest');
var SuggestList = require('./suggest_list');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight,
  ToastAndroid,
  TouchableOpacity,
  Component,
  Navigator,
} = React;



var HelloWord = React.createClass({
  

  render: function() {
    return (
        <Navigator
          initialRoute={{id: 'SuggestList', name: 'Index'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            return Navigator.SceneConfigs.FloatFromRight;
          }} />

      );
  },

  
  
  renderScene:function(route, navigator) {
    var routeId = route.id
    
    if (routeId == 'Suggest') {
      return (
        <Suggest   navigator={navigator} />
      );
    }else if (routeId == 'SuggestList'){
      return (
        <SuggestList  navigator={navigator} />
      );
    }

  },
  

});










  



AppRegistry.registerComponent('HelloWord', () => HelloWord);
