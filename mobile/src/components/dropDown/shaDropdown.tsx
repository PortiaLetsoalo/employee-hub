import {View, TouchableOpacity, FlatList} from 'react-native';
import React, {FC} from 'react';
import ShaInput from '../input/shaInput';
import ShaText from '../text/shaText';
import {IShaDropdownProps} from './interface';
import {getStyling} from './style';
import {useDropdown} from './util';
import ShaButton from '../button/shaButton';
import ShaDivider from '../divider/shaDivider';
import ShaView from '../view/shaView';
import {evaluateObject} from '../../utils';
//import ShaLoader from '../loader/shaLoader';

const ShaDropdown: FC<IShaDropdownProps<any>> = (props: any) => {
  const properties = useDropdown(props);
  const {
    data,
    label,
    query,
    queryRef,
    hideLabel,
    valuePropName,
    showResults,
    onChangeText,
    onDropDown,
    onClear,
    onSelected,
    onBlur,
    disabled,
    loading,
    onFocus,
    disableSearch,
    iconColor,
  } = properties;
  const style = getStyling(properties);
  const propStyles = properties?.styles ?? {};
  return (
    <View style={style.container} pointerEvents={disabled ? 'none' : 'auto'}>
      <ShaInput
        {...properties}
        label={!hideLabel ? label : undefined}
        placeholder={props?.placeholder ?? 'Select an Item...'}
        value={query}
        ref={queryRef}
        onChangeText={onChangeText}
        style={style.input}
        inputStyle={propStyles?.input}
        onBlur={onBlur}
        disabled={disableSearch}
        onFocus={onFocus}
        containerStyle={style.inputMainContainer}
        inputContainerStyle={style.inputContainer}
        labelStyle={style.label}
      />
      {query !== '' ? (
        <ShaButton
          onPress={onClear}
          containerStyle={{...style.iconContainer}}
          buttonStyle={style.rightIconButton}
          icon={{name: 'close', type: 'ant-design', size: 16, color: iconColor}}
        />
      ) : (
        <ShaButton
          onPress={onDropDown}
          containerStyle={{...style.iconContainer}}
          buttonStyle={style.rightIconButton}
          icon={
            showResults && data
              ? {name: 'up', type: 'ant-design', size: 16, color: iconColor}
              : {name: 'down', type: 'ant-design', size: 16, color: iconColor}
          }
        />
      )}
      {showResults && data.length > 1 ? (
        <ShaView
          style={{...style.listContainer, marginTop: hideLabel ? 45 : 45}}>
          {loading ? (
            <ShaView style={{height: 300}}></ShaView>
          ) : (
            <FlatList
              data={data}
              nestedScrollEnabled={true}
              keyboardShouldPersistTaps={'handled'}
              renderItem={({item}) => {
                const value = evaluateObject(valuePropName, item);
                return (
                  <ShaView>
                    <TouchableOpacity
                      style={style.item}
                      onPress={() => {
                        onSelected?.(item);
                      }}>
                      <ShaText style={style.text}>{value}</ShaText>
                    </TouchableOpacity>
                    <ShaDivider dashed containerStyle={style.border} />
                  </ShaView>
                );
              }}
            />
          )}
        </ShaView>
      ) : null}
    </View>
  );
};

export default ShaDropdown;
