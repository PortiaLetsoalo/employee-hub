import { createContext } from 'react';
//import type { IFlagsSetters, IFlagsState } from '../../utils/flags';
import type { ThemeMode } from './utils/types';
//import { FLAGS_INITIAL_STATE } from '../../utils/flags/flagsReducer';
import type {
  IDrawerThemePalette,
  IShaTheme,
  IThemePalette,
} from './utils/interface';

export type IFlagProgressFlags = '' /* NEW_IN_PROGRESS_FLAG_GOES_HERE */;
export type IFlagSucceededFlags = '' /* NEW_SUCCEEDED_FLAG_GOES_HERE */;
export type IFlagErrorFlags = '' /* NEW_ERROR_FLAG_GOES_HERE */;
export type IFlagActionedFlags = '' /* NEW_ACTIONED_FLAG_GOES_HERE */;

export interface IThemeStateContext
  // extends IFlagsState<
  //   IFlagProgressFlags,
  //   IFlagSucceededFlags,
  //   IFlagErrorFlags,
  //   IFlagActionedFlags
  // >
   {
  readonly theme?: IShaTheme;
  readonly themeColors?: IThemePalette;
  readonly themeMode?: ThemeMode;
  readonly drawerThemeColors?: IDrawerThemePalette;
}

export interface IThemeActionsContext
  // extends IFlagsSetters<
  //   IFlagProgressFlags,
  //   IFlagSucceededFlags,
  //   IFlagErrorFlags,
  //   IFlagActionedFlags
  // > 
  {
  getTheme: () => IThemePalette;
  getDrawerTheme: () => IDrawerThemePalette;
  //getThemeMode: () => any;
  setTheme: (theme: any) => void;
  setThemeMode: (mode: ThemeMode) => void;
}

export const FORMS_CONTEXT_INITIAL_STATE: IThemeStateContext = {
 // ...FLAGS_INITIAL_STATE,
  theme: {},
  themeColors: {},
  themeMode: 'light',
  drawerThemeColors: {},
};

export const FormsStateContext = createContext<IThemeStateContext>(
  FORMS_CONTEXT_INITIAL_STATE
);

export const FormsActionsContext = createContext<
  IThemeActionsContext | undefined
>(undefined);
