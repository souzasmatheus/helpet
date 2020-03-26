import { StyleSheet, Dimensions } from 'react-native';
import { colors, sizes } from '../../../config/theme';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  outterContainer: {
    borderRadius: sizes.borderRadius,
    overflow: 'hidden',
  },
  backgroundImage: {
    width: width - sizes.margin,
    height: width - sizes.margin,
  },
  textContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  textBackground: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
