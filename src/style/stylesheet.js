import { StyleSheet } from 'react-native';
import colors from './colors';
import table from './table';
import misc from './misc';

const styles = StyleSheet.create(Object.assign({}, table, misc));

export { colors, styles };
