import { StyleSheet } from 'react-native';

export type RequestState = 'initial' | 'loading' | 'success' | 'submitted' | 'error' | 'actioned';

export const flatten = (obj: any) => {
    return StyleSheet.flatten(obj);
};

export interface IRequestResult<TResult = any, TError = any> {
  state: RequestState;
  value?: TResult;
  error?: TError;
}

export const evaluateObject = (path: string, obj: any) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

export const generateGUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});
}

