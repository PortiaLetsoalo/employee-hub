import React from 'react';
import {View} from 'react-native';
import ShaText from '../../../components/text/shaText';
import {getStyling} from './style';

const CustomLabel: React.FC<CustomLabelProps> = ({
  label,
  required,
  labelStyle,
}) => {
  const styles = getStyling();
  return (
    <View style={labelStyle}>
      <ShaText style={labelStyle}>
        {label}
        {required && <ShaText style={styles.esterik}> *</ShaText>}
      </ShaText>
    </View>
  );
};

export default CustomLabel;
