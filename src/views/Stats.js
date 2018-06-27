import React from 'react';
import {
  Text, View, FlatList,
} from 'react-native';

import ScoreHistoryHeader from '../components/ScoreHistoryHeader';
import ScoreHistoryRow from '../components/ScoreHistoryRow';

import { listScores } from '../engine/scores';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Stats',
  }

  constructor(props) {
    super(props);
    this.state = {
      scorePoints: null,
    };
  }

  componentDidMount() {
    listScores()
      .then(scores => this.setState({
        scorePoints: scores.sort(
          // More recent first
          (a, b) => ((a.timestamp < b.timestamp) ? 1 : -1),
        ),
      }))
      .catch((err) => {
        if (err.name && err.name === 'NotFoundError') {
          this.setState({ scorePoints: [] });
        } else {
          throw err;
        }
      });
  }

  render() {
    const { scorePoints } = this.state;
    return (
      <View>
        <Text>
            History
        </Text>
        <ScoreHistoryHeader />
        {scorePoints === null
          ? (
            <Text>
              Loading...
            </Text>
          ) : (
            <FlatList
              data={scorePoints}
              keyExtractor={item => item.timestamp}
              renderItem={({ item }) => (
                <ScoreHistoryRow
                  date={new Date(item.timestamp)}
                  level={item.level}
                  ratio={item.score.ratio}
                />
              )}
            />
          )
      }
      </View>
    );
  }
}
