import { StyleSheet, Dimensions } from 'react-native';
import { colors, sizes } from '../../../config/theme';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  outterContainer: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: width - sizes.margin,
    height: width - sizes.margin,
    overflow: 'hidden',
  },
  textContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  textBackground: {
    height: 50,
    backgroundColor: colors.white,
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18
  }
});

export default styles;
