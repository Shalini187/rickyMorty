import React, { useState } from 'react';
import { View } from 'react-native';

import { SystemListView } from './src/components';

console.disableYellowBox = true;

const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <SystemListView />
    </View>
  )
}

export default App;
