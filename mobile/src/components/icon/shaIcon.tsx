import React, { FC, memo } from 'react';
import { IShaIconProps } from './interface';
import { useTheme } from '../../providers/theme';
import { Icon } from '@rneui/themed';

const ShaIcon: FC<IShaIconProps> = (props) => {
  //const properties = addPropValidation(props,);
  const { themeColors } = useTheme();

  return <Icon color={themeColors?.iconColor} {...props}/>;
};

export default memo(ShaIcon);
