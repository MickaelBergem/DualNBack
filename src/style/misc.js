import { Dimensions } from 'react-native';
import colors from './colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default {
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
  fx1: {
    flex: 1,
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
  bold: {
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
  fxHorizontal: {
    flex: 1,
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
};
