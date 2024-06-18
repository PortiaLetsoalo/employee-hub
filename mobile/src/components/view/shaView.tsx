import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { getStyling } from './styles';

const ShaView: FC<ViewProps> = (props) => {
  return <View {...props} style={[getStyling().viewStyle, props.style]} />;
};

export default ShaView;
