import React from 'react';
import {TouchableOpacity} from 'react-native';
import type {FC} from 'react';
import {styles} from './style';
import ShaView from '../../../components/view/shaView';
import ShaText from '../../../components/text/shaText';
import ShaImage from '../../../components/image/shaImage';
import {ICON} from '../../../utils/constants/images';

const EmployeeListItem: FC<any> = props => {
  const {onClicked, firstName, lastName, contactNumber} = props;

  return (
    <TouchableOpacity onPress={onClicked}>
      <ShaView style={styles.container}>
        <ShaImage
          source={{
            uri: ICON,
            height: 50,
            width: 50,
          }}
          style={{borderRadius: 60}}
        />
        <ShaView style={styles.subContainer}>
          <ShaView style={styles.row}>
            <ShaText style={styles.title}>
              {firstName} {lastName}
            </ShaText>
          </ShaView>
          <ShaView style={styles.row}>
            <ShaText style={[styles.rowItem, {fontWeight: '700'}]}>
              {contactNumber}
            </ShaText>
          </ShaView>
        </ShaView>
      </ShaView>
    </TouchableOpacity>
  );
};
export default EmployeeListItem;
