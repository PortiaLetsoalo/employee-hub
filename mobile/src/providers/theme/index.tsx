import React, {
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import type { ThemeMode } from './utils/types';
//import { getFlagSetters } from '../../utils/flags/flagsSetters';
import {
  setThemeModeAction,
  setThemeAction,
  setThemeColorsAction,
  setDrawerThemeColorsAction,
} from './actions';
import {
  FormsActionsContext,
  FormsStateContext,
  FORMS_CONTEXT_INITIAL_STATE,
} from './contexts';
import { themeReducer } from './reducer';
import type {
  IDrawerThemePalette,
  IShaThemeProviderProps,
  IThemePalette,
} from '../theme/utils/interface';

const ThemeProvider: FC<PropsWithChildren<IShaThemeProviderProps>> = ({
  themeMode,
  theme,
  children,
}) => {
  const [state, dispatch] = useReducer(
    themeReducer,
    FORMS_CONTEXT_INITIAL_STATE
  );

  useEffect(() => {
    updateThemes();
  }, [themeMode, theme]);

  const updateThemes = () => {
    setTheme(theme);
    setThemeMode(themeMode ?? 'light');
    setThemeColors(getTheme() ?? {});
    setDrawerThemeColors(getDrawerTheme() ?? {});
  };

  const getTheme = (): IThemePalette => {
    let activeTheme: IThemePalette | undefined = theme?.colors?.light;
    if (themeMode == 'dark') {
      activeTheme = theme?.colors?.dark;
    }
    return activeTheme ?? {};
  };

  const getDrawerTheme = (): IDrawerThemePalette => {
    let activeDrawerTheme: IDrawerThemePalette | undefined =
      theme?.colors?.drawerLight;
    if (theme?.sidebar == 'dark') {
      activeDrawerTheme = theme?.colors?.drawerDark;
    }
    return activeDrawerTheme ?? {};
  };

  const setTheme = (theme: any) => {
    dispatch(setThemeAction(theme));
  };
  const setThemeColors = (themeColors: IThemePalette) => {
    dispatch(setThemeColorsAction(themeColors));
  };

  const setDrawerThemeColors = (drawerThemeColors: IDrawerThemePalette) => {
    dispatch(setDrawerThemeColorsAction(drawerThemeColors));
  };

  const setThemeMode = (mode: ThemeMode) => {
    dispatch(setThemeModeAction(mode));
  };

  return (
    <FormsStateContext.Provider value={{ ...state, themeMode, theme }}>
      <FormsActionsContext.Provider
        value={{
         // ...getFlagSetters(dispatch),
          getTheme,
          getDrawerTheme,
          setTheme,
          setThemeMode,
        }}
      >
        {children}
      </FormsActionsContext.Provider>
    </FormsStateContext.Provider>
  );
};

function useThemeState() {
  const context = useContext(FormsStateContext);

  if (context === undefined) {
    // throw new Error('useThemeState must be used within a FormsProvider');
  }

  return context;
}

function useThemeActions() {
  const context = useContext(FormsActionsContext);

  if (context === undefined) {
    // throw new Error('useThemeActions must be used within a FormsProvider');
  }

  return context;
}

function useTheme() {
  return { ...useThemeState(), ...useThemeActions() };
}

export { ThemeProvider, useThemeState, useThemeActions, useTheme };
