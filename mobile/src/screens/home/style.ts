import {StyleSheet} from 'react-native';

export const getStyling = () => {
  let data = [];
  const justifyContent = data?.length == 0 ? 'flex-start' : 'center';
  return StyleSheet.create({
    container: {
      backgroundColor: '#0d020f',
      flex: 1,
      paddingVertical: 25,
    },
    scrollViewWrapper: {
      flex: 1,
    },
    totalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    searchBar: {width: '70%'},
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: justifyContent ?? 'flex-start',
    },
    centeredContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 40,
    },
    footerText: {
      fontSize: 14,
      marginBottom: 10,
      color: '#B0B0B0',
      paddingVertical: 10,
      marginTop: 40,
      textAlign: 'center',
    },
    skillsFilter: {
      paddingHorizontal: 10,
      padding: 0,
      flexDirection: 'row',
      borderRadius: 30,
      backgroundColor: 'white',
      alignContent: 'flex-end',
      justifyContent: 'flex-end',
      flex: 1,
    },
    autoCompInput: {
      backgroundColor: '#140226',
      borderColor: '#8e8c91',
      opacity: 1,
      color: 'white',
    },
    title: {fontWeight: '500', color: '#FFFFFF', fontSize: 14},
    rowItem: {
      marginStart: 5,
      fontSize: 14,
      color: '#FFFFFF',
      fontWeight: '500',
    },
    footer: {
      fontSize: 14,
      textAlign: 'center',
      color: '#FFFFFF',
      paddingHorizontal: 50,
    },
    divider: {
      width: '100%',
      backgroundColor: 'white',
      marginBottom: 20,
    },
    filterContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      marginHorizontal: 10,
    },
    filterListContainer: {width: '30%', marginLeft: 0},
    innerContainer: {marginHorizontal: 10},
    dropdownInput:{
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      opacity: 1,
      color: 'white',
    },
  });
};
