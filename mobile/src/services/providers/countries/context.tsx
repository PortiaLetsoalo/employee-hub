import { createContext } from 'react';
import { IRequestResult } from '../../../utils/index';
import { CountryDto } from '../../generated/api/models/CountryDto';

export interface ICountiriesStateContext{
    countries?: IRequestResult<CountryDto[]>;
}

export interface ICountriesErrorResponse {
    error: string;
    error_description: string;
    error_uri: string;
  }
  

export interface ICountriesActionContext{
   getCountries?:()=>void;
}

export const countriesState  = createContext<ICountiriesStateContext>({} as ICountiriesStateContext);

export const countriesActions  = createContext<ICountriesActionContext>({} as ICountriesActionContext);
