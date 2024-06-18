import { Button } from '@rneui/themed';
import React, { FC } from 'react';
import ShaIcon from '../icon/shaIcon';
import { IShaButtonProps } from './interface';
import { getStyling } from './style';

const ShaButton: FC<IShaButtonProps> = (props) => {
  const { children, icon, text, titleStyle, buttonStyle, ...button } =
  props;

  const styles = getStyling(props);
  return (
    <Button
      titleStyle={styles.titleStyle}
      buttonStyle={styles.buttonStyle}
      {...button}
    >
      {icon && <ShaIcon {...icon} />}
      {text || children}
    </Button>
  );
};

export default ShaButton;
