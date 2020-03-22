import { StyleSheet } from 'react-native';
import { sizes } from '../../../config/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: sizes.margin / 2,
    paddingHorizontal: sizes.margin / 2,
  },
  infoContainer: {
    marginTop: sizes.margin,
  },
  textGroup: {
    marginBottom: sizes.margin / 2,
  },
  infoHeading: {
    fontWeight: '600',
  },
});

export default styles;
