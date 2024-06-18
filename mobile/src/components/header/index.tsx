import React from 'react';
import {View, Text} from 'react-native';
import ShaButton from '../button/shaButton';
import {Screens} from '../../screens';
import ShaView from '../view/shaView';
import ShaIcon from '../icon/shaIcon';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      <ShaView style={styles.headerIconsContainer}>
        <ShaIcon
          name={title === Screens.Home ? 'menu' : 'arrow-left'}
          type="feather"
          size={25}
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
            containerStyle={{marginRight: 10}}
            buttonStyle={styles.headerButton}
            icon={{
              name: 'circle-with-plus',
              type: 'entypo',
              size: 25,
              color: 'white',
            }}
            text="New Employee"
            titleStyle={{marginLeft: 5}}
          />
        ) : (
          <ShaIcon
            name="person"
            type="ionicons"
            size={27}
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
        )}
      </ShaView>
    </View>
  );
};

export default Header;
