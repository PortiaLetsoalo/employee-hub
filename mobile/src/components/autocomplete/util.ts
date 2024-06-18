import type { IShaAutocompleteProps } from './interface';

export const useAutocomplete = ({
  ...props
}: IShaAutocompleteProps<any>): IShaAutocompleteProps<any> => {
  const { disableSearch = false } = props ?? {};

  const state = {
    disableSearch,
  };

  return { ...props, ...state };
};
