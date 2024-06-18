import { createContext } from 'react';
import { PersonCreateDto} from '../../generated/api'
import { IRequestResult } from '../../../utils/index';

export interface IPersonStateContext{
    person?: IRequestResult<PersonCreateDto>;
    persons?: IRequestResult<PersonCreateDto[]>;
}

export interface IPersonErrorResponse {
    error: string;
    error_description: string;
    error_uri: string;
  }
  

export interface IPersonActionContext{
   getPersonById?:(id:any)=>void;
   createPerson?:(payload:PersonCreateDto)=>Promise<PersonCreateDto>;
   updatePerson?:(payload:PersonCreateDto)=>Promise<PersonCreateDto>;
   getAllPerson?:()=>void;
}

export const PersonState  = createContext<IPersonStateContext>({} as IPersonStateContext);

export const PersonActions  = createContext<IPersonActionContext>({} as IPersonActionContext);
