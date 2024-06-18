import {StyleSheet} from 'react-native';
import {useTheme} from '../../providers/theme';

export const getStyling = () => {
  const {theme} = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0d020f',
    },
    formContainer: {
      marginHorizontal: 10,
      marginVertical: 6,
      padding: 10,
      borderRadius: 10,
    },
    saveButton:{borderRadius: 40,paddingHorizontal: 18,paddingLeft: 15,backgroundColor: '#7427c2'},
    input: {backgroundColor: '#8e8c91', borderWidth: 0},
    label: {
      color: 'white',
      fontFamily: theme?.font?.mediumFontFamily,
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    columnlabel: {
      marginLeft: 5,
      color: '#fff',
      fontFamily: theme?.font?.mediumFontFamily,
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    insideContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    divider: {
      width: '100%',
      backgroundColor: 'white',
      marginBottom: 20,
    },
    buttonsContainer: {},
    button: {
      borderRadius: 10,
    },
    firstSection: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 10,
    },
  });
};
