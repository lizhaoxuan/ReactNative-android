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
  BackAndroid,
  ToolbarAndroid,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    backgroundColor: '#3993cf',
    height: 56,
    fontSize: 18,
    alignItems: 'center',
    justifyContent :'space-between',
  }
});

var _navigator = null;
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    
    _navigator.pop();
    return true;
  }

  return false;
});

var HelloWord = React.createClass({
  

  render: function() {
    return (
        <Navigator
          style={styles.container}
          initialRoute={{id: 'SuggestList', name: '投诉与建议',index:0}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }} />

      );
  },

  
  
  renderScene:function(route, navigator) {
    _navigator = navigator;
    var routeId = route.id
    var _title = 'sda'
    if (routeId == 'Suggest') {
      return (
        <View style={styles.container}>
          <ToolbarAndroid
              actions={[]}
              navIcon={require('image!ico_right')}
              onIconClicked={navigator.pop}
              style={styles.toolbar}
              titleColor="white"
              title={route.name} />
          <Suggest   navigator={navigator} />
        </View>
      );
    }else if (routeId == 'SuggestList'){
      return (
        <View style={styles.container}>
          <ToolbarAndroid
              actions={[]}
              navIcon={require('image!ico_right')}
              onIconClicked={navigator.pop}
              style={styles.toolbar}
              titleColor="white"
              title='投诉与建议' />
          <SuggestList  navigator={navigator} />
        </View>
      );
    }

  },
  

});










  



AppRegistry.registerComponent('HelloWord', () => HelloWord);
