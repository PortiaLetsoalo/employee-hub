import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ShaButton from '../button/shaButton';
import {Screens} from '../../screens';
import ShaView from '../view/shaView';
import ShaIcon from '../icon/shaIcon';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <ShaView style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <ShaIcon
          name={title === Screens.Home ? 'menu' : 'arrowleft'}
          type="ant-design"
          size={16}
          color="white"
          style={{padding: 15}}
          onPress={() => {
            if (!Screens.Home || title !== Screens.Home) {
              navigation.goBack();
            } else {
              null;
            }
          }}
        />
        {title === Screens.Home ? (
          <ShaButton
            onPress={() =>
              navigation.navigate(Screens.EmployeeDetails as never)
            }
            buttonStyle={{borderRadius: 25,backgroundColor:'#7427c2'}}
            icon={{name: 'close', type: 'ant-design', size: 16,color:'white'}}
            text="New Employee"
          />
        ) : null}
      </ShaView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    borderBottomColor: '#e0e0e0',
    paddingHorizontal: 10,
    backgroundColor: '#0d020f',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
