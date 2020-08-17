import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
class MyWeb extends Component {
  render() {
    return <WebView source={{ uri: 'https://www.konexio.eu/index.html' }} style={{ height: 600}}/>;
  }
}
export default MyWeb;