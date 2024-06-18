import { useEffect, useRef, useState } from 'react';
import type { IShaDropdownProps } from './interface';
import { evaluateObject } from '../../utils';

interface IShaDropdownState {
  query?: string;
  showResults: boolean;
  filteredData?: any;
  selectedItem?: any;
}

export const useDropdown = ({
  data,
  valuePropName,
  ...props
}: IShaDropdownProps<any>): IShaDropdownProps<any> => {
  const INIT_STATE: IShaDropdownState = {
    query: props.value ?? '',
    showResults: false,
    filteredData: [],
    selectedItem: props.value ?? '',
  };
  const [state, setState] = useState<IShaDropdownState>(INIT_STATE);

  const { selectedItem, showResults, filteredData, query } = state;
  const queryRef = useRef<any>();

  const {
    loading = false,
    disabled = false,
    disableSearch = true,
    errorMessage = '',
  } = props ?? {};

  useEffect(() => {
    setState((s: any) => ({ ...s, query: selectedItem }));
  }, [selectedItem]);

  const getFilteredData = (query: string) => {
    props?.getFilteredData?.(query);
    if (query !== '') {
      return data?.filter(
        (item) =>
          evaluateObject?.(valuePropName, item)
            ?.toLowerCase()
            ?.indexOf(query.toLowerCase()) > -1
      );
    } else {
      return data;
    }
  };

  const onChangeText = (text: string) => {
    props?.onChangeText?.(text);
    setState((s: any) => ({
      ...s,
      filteredData: getFilteredData(text),
      query: text,
      showResults: text === '' ? false : true,
    }));
  };

  const onDropDown = () => {
    props?.onDropDown?.();
    setState((s: any) => ({
      ...s,
      filteredData: getFilteredData(''),
      showResults: showResults && data ? !showResults : query === '',
    }));
  };

  const onClear = () => {
    setState((s: any) => ({
      ...s,
      query: '',
      filteredData: getFilteredData(''),
    }));

    queryRef?.current?.clear();
    props?.onClear?.();
  };

  const onSelected = (selectedItem: any) => {
    props?.onSelected?.(selectedItem);
    const selectedValue = evaluateObject(valuePropName, selectedItem);
    setState((s: any) => ({
      ...s,
      selectedItem: selectedValue,
      query: selectedValue,
      showResults: !showResults,
      filteredData: getFilteredData(''),
    }));
  };

  const onBlur = () => {
    props?.onBlur;
    setTimeout(() => {
      setState((s: any) => ({
        ...s,
        showResults: false,
      }));
    }, 1000);
  };

  const onFocus = () => {
    props?.onFocus;
  };

  const mutatedProps = {
    data: data ?? filteredData,
    query,
    showResults,
    queryRef,
    valuePropName,
    disabled,
    loading,
    errorMessage,
    disableSearch,
    onBlur,
    onChangeText,
    onDropDown,
    onClear,
    onSelected,
    onFocus,
    iconColor: props.iconColor ?? 'black',
    getFilteredData,
    setSelectedItem: (selectedItem: any) =>
      setState((s: any) => ({ ...s, selectedItem })),
  };

  return { ...props, ...mutatedProps };
};
