import { createAction } from 'redux-actions';
import type { ThemeMode } from './utils/types';
import type { IThemeStateContext } from './contexts';
import type { IDrawerThemePalette, IThemePalette } from './utils/interface';

export enum FormsActionEnums {
  SetThemeModeAction = 'SET_THEME_MODE_ACTION',
  SetThemeAction = 'SET_THEME_ACTION',
  SetThemeColorsAction = 'SET_THEME_COLORS_ACTION',
  SetDrawerThemeColorsAction = 'SET_DRAWER_THEME_COLORS_ACTION',
}

export const setThemeAction = createAction<IThemeStateContext, any>(
  FormsActionEnums.SetThemeAction,
  (theme) => ({ theme })
);

export const setThemeModeAction = createAction<IThemeStateContext, ThemeMode>(
  FormsActionEnums.SetThemeModeAction,
  (themeMode) => ({ themeMode })
);

export const setThemeColorsAction = createAction<
  IThemeStateContext,
  IThemePalette
>(FormsActionEnums.SetThemeColorsAction, (themeColors) => ({ themeColors }));

export const setDrawerThemeColorsAction = createAction<
  IThemeStateContext,
  IDrawerThemePalette
>(FormsActionEnums.SetDrawerThemeColorsAction, (drawerThemeColors) => ({
  drawerThemeColors,
}));

/* NEW_ACTION_GOES_HERE */
