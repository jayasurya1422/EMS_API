import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NotificationProvider } from './NotificationContext'; // Ensure the path is correct
import Layout from './_layout'; // Ensure the path is correct

export default function App() {
  return (
    <NotificationProvider>
      <NavigationContainer>
        <Layout />
      </NavigationContainer>
    </NotificationProvider>
  );
}
