import React from 'react';
import { TouchableOpacity } from 'react-native';
import type { FC } from 'react';
import { styles } from './style';
import ShaView from '../../../components/view/shaView';
import ShaText from '../../../components/text/shaText';
import ShaDivider from '../../../components/divider/shaDivider';

const SkillListItem: FC<any> = (props) => {
  const {
    onClicked,
    name,
  } = props;
  return (
    <TouchableOpacity onPress={onClicked} style={{ margin: 5 }}>
      <ShaView style={styles.skillContainer}>
        <ShaText style={styles.skillName}>{name}</ShaText>
        <ShaDivider containerStyle={styles.divider} />
      </ShaView>
    </TouchableOpacity>
  );
};
export default SkillListItem;
