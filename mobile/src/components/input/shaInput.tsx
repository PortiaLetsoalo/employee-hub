import {Input} from '@rneui/themed';
import React, {FC} from 'react';
import {IShaInputProps} from './interface';
import {getStyling} from './style';
import {useInput} from './util';
import CustomLabel from './components/customLabel';

const ShaInput: FC<IShaInputProps> = props => {
  const properties = useInput(props);
  const {label, required} = properties;
  const styles = getStyling(properties);
  return (
    <Input
      {...properties}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      labelStyle={styles.label}
      label={
        <CustomLabel
          label={label as string}
          required={required}
          labelStyle={styles.label}
        />
      }
    />
  );
};

export default ShaInput;
