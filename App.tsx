import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routers from './src/navigations/Routers';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Routers/>
    </>
  );
}

