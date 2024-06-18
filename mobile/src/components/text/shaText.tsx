import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';
import { getStyling } from './style';

const ShaText: FC<TextProps> = (props) => {
  const styles = getStyling(props);
  return <Text {...props} style={styles.text} />;
};

export default ShaText;
