'use strict';

import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Modal,
  Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const shareBarHeight = 150;

var ShareModal = React.createClass({
  getInitialState: function() {
    return{
      modalVisible: true,
    };
  },
  shareToTimeline: function() {

  },
  render: function() {
    return (
      <Modal
        animationType={'none'}
        transparent={true}
        visible={this.state.modalVisible}>
        <TouchableOpacity style={styles.mask} onPress={()=>{this.props.hideShareModal()}}>
          <View style={styles.innerContainer}>
            <View style={styles.logos}>
              <TouchableOpacity onPress={this.shareToTimeline}><Image style={{width: 48, height: 48}} source={require('../imgs/icon64_wx_logo.png')}/></TouchableOpacity>
              <Image style={{width: 48, height: 48}} source={require('../imgs/icon_wx_moments.png')}/>
            </View>
            <View style={styles.cancle}><TouchableOpacity onPress={()=>{this.props.hideShareModal()}}><Text>取消</Text></TouchableOpacity></View>
          </View>
        </TouchableOpacity>
      </Modal>
    );

  },
});

var styles = StyleSheet.create({
  hidebtn: {
    width: 100,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
  },

  mask: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  innerContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
    height: shareBarHeight,
  },
  logos: {
    flex:1,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancle: {
    alignItems: 'center',
    marginBottom: 10,
  }
});


module.exports = ShareModal;
