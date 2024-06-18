import { useState } from 'react';
import type { IShaAlertMutatedProps, IShaAlertProps } from './interface';
import { getColor } from './style';

export const useAlert = ({
  ...props
}: IShaAlertProps): IShaAlertMutatedProps => {
  const [closed, setClosed] = useState(false);
  const onCloseHandler = () => {
    if (props.closable) {
      setClosed(true);
    }
  };

  const properties: IShaAlertMutatedProps = {
    closed: closed,
    onCloseHandler: onCloseHandler,
    ...props,
    iconColor: props.iconColor ?? getColor(props.alertType),
  };

  return { ...properties };
};
