import type { InputProps } from '@rneui/base';
import { createRef, useEffect } from 'react';
import type { IShaInputMutatedProps, IShaInputProps } from './interface';

export const useInput = ({
  shakeOnError,
  ...props
}: IShaInputProps): IShaInputMutatedProps => {
  const ref = createRef<InputProps | any>();

  useEffect(() => {
    if (props?.errorMessage && shakeOnError && ref?.current?.shake) {
      ref.current.shake();
    }
  }, [props?.errorMessage]);

  const properties: IShaInputMutatedProps = {
    placeholderTextColor: '#B2B8BE',
    underlineColorAndroid: 'transparent',
  };

  return { ...props, ...properties, ref };
};
