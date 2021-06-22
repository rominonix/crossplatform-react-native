import {NavigationContainer} from '@react-navigation/native'
import MainStack from '../navigators/MainStack'
import React from 'react';

export default function TheRestOfApp() {
  return (

    <NavigationContainer>
      <MainStack />
    </NavigationContainer>

  );
}