import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
// Palette
const colors = {
  black: '#000',
  darkGray: '#2b2b2b',
  lightGray: '#eee',
  gray: '#696969',
  white: '#fff',
  blue: '#62a8fb',
  darkBlue: '#1f6cc7',
  red: '#eb2f06',

  lightOrange: '#f6b93b',
  green: '#079992',
};

// Bindings
colors.primaryButton = colors.blue;
colors.secondaryButton = colors.lightGray;
colors.controlButtonPressed = colors.darkBlue;

colors.tileColor = colors.black;
colors.tileBorder = colors.gray;
colors.tileLitColor = colors.red;
colors.colorsChannel = [colors.red, colors.lightOrange, colors.green, colors.blue, colors.white];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGray,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fxAround: {
    flex: 1,
    justifyContent: 'space-around',
  },
  padded: {
    padding: 20,
  },
  title: {
    fontSize: 50,
  },
  text: {
    color: colors.white,
  },
  fxHorizontal: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    minWidth: 150,
    borderRadius: 4,
    margin: 5,
  },
  buttonTitle: {
    color: colors.white,
  },
  primaryButton: {
    backgroundColor: colors.primaryButton,
  },
  secondaryButton: {
    backgroundColor: colors.secondaryButton,
  },
  pressedButton: {
    backgroundColor: colors.controlButtonPressed,
  },
  controlButton: {
    width: 150,
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
  Score__pre: {
    fontSize: 20,
    textAlign: 'center',
  },
  Score__value: {
    fontSize: 60,
    textAlign: 'center',
  },
});

export { colors, styles };
