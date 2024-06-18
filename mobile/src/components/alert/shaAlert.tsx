import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import ShaIcon from '../icon/shaIcon';
import ShaText from '../text/shaText';
import ShaView from '../view/shaView';
import { IShaAlertProps} from './interface';
import { getStyling } from './style';
import { useAlert } from './util';

const ShaAlert: FC<IShaAlertProps> = (props) => {
  const { onCloseHandler, ...properties } = useAlert(props);

  const styles = getStyling(properties);

  if (properties.closed) {
    return null;
  }

  return (
    <ShaView style={styles.container}>
      <ShaView style={styles.innerContainer}>
        {properties.showIcon && (
          <ShaIcon
            name={properties.icon?.name ?? ''}
            type={properties.icon?.type ?? 'antdesign'}
            color={properties.iconColor}
            style={styles.leftIcon}
          />
        )}
        <ShaView style={styles.textColumnContainer}>
          <ShaText style={styles.textStyle}>{properties.text}</ShaText>
          <ShaText style={styles.descriptionStyle}>
            {properties.description}
          </ShaText>
        </ShaView>
        {properties.closable && (
          <ShaView style={styles.closeIconContainer}>
            <TouchableOpacity onPress={onCloseHandler}>
              <ShaIcon
                name="close"
                type="antdesign"
                color={properties.closeIconColor}
                size={16}
              />
            </TouchableOpacity>
          </ShaView>
        )}
      </ShaView>
    </ShaView>
  );
};

export default ShaAlert;
