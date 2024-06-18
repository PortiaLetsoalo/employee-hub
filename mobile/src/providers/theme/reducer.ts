//import flagsReducer from '../../utils/flags/flagsReducer';
import { FormsActionEnums } from './actions';
import type { IThemeStateContext } from './contexts';

export function themeReducer(
  incomingState: IThemeStateContext,
  action: ReduxActions.Action<IThemeStateContext>
): IThemeStateContext {
//const state = flagsReducer(action, incomingState);
const state:any = ''
  const { type, payload } = action;

  switch (type) {
    case FormsActionEnums.SetThemeAction:
    case FormsActionEnums.SetThemeModeAction:
    case FormsActionEnums.SetThemeColorsAction:
    case FormsActionEnums.SetDrawerThemeColorsAction:
      /* NEW_ACTION_ENUM_GOES_HERE */
      return {
        ...state,
        ...payload,
      };

    default: {
      return state;
    }
  }
}
