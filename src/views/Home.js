import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../style/stylesheet';
import Button from '../components/Button';

const Home = ({ navigation }) => (
  <View style={[styles.container, styles.fxAround]}>
    <View>
      <Text style={[styles.text, styles.title]}>
      Dual N Back
      </Text>
      <Text style={[styles.text]}>
      Muscle your brain
      </Text>
    </View>
    <View>
      <Button
        title="Start"
        onPress={() => navigation.push('Game')}
      />
      <Button
        title="Stats"
        onPress={() => navigation.push('Stats')}
      />
    </View>
  </View>
);

Home.navigationOptions = {
  title: 'Home',
  header: null,
};

export default Home;
