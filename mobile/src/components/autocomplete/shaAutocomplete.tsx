import React, { FC } from 'react';
import {type IShaAutocompleteProps } from './interface';
import { useAutocomplete } from './util';
import ShaDropdown from '../dropDown/shaDropdown';

const ShaAutocomplete: FC<IShaAutocompleteProps<any>> = (props: any) => {
  const properties = useAutocomplete(props);
  return <ShaDropdown {...properties} />;
};
export default ShaAutocomplete;
