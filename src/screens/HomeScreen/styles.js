import { StyleSheet } from 'react-native';
import { colors } from '../../../config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center' 
  }
});

export default styles;
