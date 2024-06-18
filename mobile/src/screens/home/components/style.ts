import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 6,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  subContainer: {
    flex: 1,
    marginStart: 5,
    marginBottom: 6,
  },
  row: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  title: {paddingVertical: 5, fontWeight: '800'},
  rowItem: {marginStart: 0, fontSize: 12},
  status: {
    color: 'white',
    borderRadius: 10,
    fontSize: 9,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignSelf: 'center',
    backgroundColor: 'green',
    borderColor: 'white',
  },
  divider: {
    width: '60%',
    backgroundColor: 'black',
    marginBottom: 0,
    alignSelf: 'center',
  },
  skillName: {
    fontSize: 16,
    marginVertical: 10,
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
  },
  skillContainer:{   
    flexDirection: 'column',
    justifyContent: 'center',
  }
});
