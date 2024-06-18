import React, { FC } from 'react';
import { Image } from 'react-native';
import type { IShaImageProps } from './interface';

const ShaImage: FC<IShaImageProps> = (props) => {
  return <Image {...props} />;
};

export default ShaImage;
