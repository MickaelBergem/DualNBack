import React from 'react';
import { Text, Button, View } from 'react-native';
import { styles } from '../style/stylesheet';

const Home = ({ navigation }) => (
  <View style={[styles.container, styles.fxAround]}>
    <Text style={[styles.text]}>
      Dual N Back
    </Text>
    <Text style={[styles.text]}>
      Muscle your brain
    </Text>
    <Button
      title="Start"
      onPress={() => navigation.push('Game')}
    />
  </View>
);

export default Home;
