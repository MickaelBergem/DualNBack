import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
// Palette
const colors = {
  black: '#000',
  darkGray: '#2b2b2b',
  gray: '#696969',
  white: '#fff',
  blue: '#82ccdd',
  red: '#eb2f06',
};

// Bindings
colors.controlButton = colors.blue;
colors.tileColor = colors.black;
colors.tileBorder = colors.gray;
colors.tileLitColor = colors.red;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: colors.white,
  },
  fxHorizontal: {
    flexDirection: 'row',
  },
  controlButton: {
    width: 150,
    padding: 5,
  },
  controlButton__btn: {
    height: 50,
  },
  gridContainer: {
    borderColor: colors.tileBorder,
    borderWidth: 1,
  },
  gridTile: {
    width: SCREEN_WIDTH / 3.0,
    height: SCREEN_WIDTH / 3.0,
    backgroundColor: colors.tileColor,
    borderWidth: 1,
    borderColor: colors.tileBorder,
  },
  gridTileLit: {
    width: SCREEN_WIDTH / 3.0,
    height: SCREEN_WIDTH / 3.0,
    backgroundColor: colors.tileLitColor,
    borderWidth: 1,
    borderColor: colors.tileBorder,
  },
});

export { colors, styles };
