import { createContext } from 'react';
import { SkillDto } from '../../generated/api'
import { IRequestResult } from '../../../utils/index';

export interface ISkillStateContext{
    skill?: IRequestResult<SkillDto>;
    skills?: IRequestResult<SkillDto[]>;
    personSkills?: IRequestResult<SkillDto[]>;
}

export interface ISkillErrorResponse {
    error: string;
    error_description: string;
    error_uri: string;
  }
  

export interface ISkillActionContext{
   getSkillsByPersonId?:(id:any)=>void;
   createSkillSet?:(payload:SkillDto[])=>void;
   updateSkillSet?:(payload:SkillDto[])=>void;
   getAllSkills?:()=>void;
   deleteSkill?:(id:string)=>void;
}

export const SkillState  = createContext<ISkillStateContext>({} as ISkillStateContext);

export const SkillActions  = createContext<ISkillActionContext>({} as ISkillActionContext);
