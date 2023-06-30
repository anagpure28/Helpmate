/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// import * as AppConstants from './src/constants/AppConstants';

import RegisterScreen from './src/screens/RegisterScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  return <LoginScreen />;
}
