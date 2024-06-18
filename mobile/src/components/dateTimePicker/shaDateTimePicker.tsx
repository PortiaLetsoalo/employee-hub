import React, {FC} from 'react';
import {TextStyle, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import ShaIcon from '../icon/shaIcon';
import ShaText from '../text/shaText';
import ShaView from '../view/shaView';
import {IShaDateTimePickerProps} from './interface';
import {getStyling} from './style';
import {useDateTime} from './util';

const DateIcon: FC<{
  mode: 'date' | 'time' | 'datetime';
  style?: TextStyle;
}> = ({mode, style}) => {
  return (
    <ShaIcon
      name={mode == 'time' ? 'clock' : 'calendar'}
      type="font-awesome-5"
      iconStyle={style}
    />
  );
};

const ShaDateTimePicker: FC<IShaDateTimePickerProps> = props => {
  const properties = useDateTime(props);
  const {
    mode,
    openModal,
    disabled,
    hideLabel,
    labelText,
    modal = true,
    label,
  } = properties;
  const style = getStyling(properties);
  
  return (
    <ShaView style={style.container}>
      {!hideLabel ? <ShaText style={style.label}> {labelText}</ShaText> : <></>}
      <TouchableOpacity
        style={style.touchableContainer}
        onPress={openModal}
        disabled={disabled}>
        <ShaText style={style.displayText}>
          {label === undefined
            ? new Date().toLocaleDateString()
            : new Date(label).toLocaleDateString()}
        </ShaText>
        <DateIcon mode={mode} style={style.icon} />
      </TouchableOpacity>
      <DatePicker {...properties} modal={modal} />
    </ShaView>
  );
};

export default ShaDateTimePicker;
