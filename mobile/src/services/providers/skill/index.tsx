import React, {
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { SkillDto, SkillService } from "../../generated/api";
import { AxiosError } from "axios";
import {
  ISkillErrorResponse,
  ISkillStateContext,
  SkillActions,
  SkillState,
} from "./context";

const SkillProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [skill] = useState<ISkillStateContext["skill"]>();
  const [skills, setSkills] = useState<ISkillStateContext["skills"]>();
  const [personSkills, setPersonSkills] = useState<ISkillStateContext["personSkills"]>();

  const getSkillsByPersonId = (id: any) => {
    setPersonSkills({ state: "loading" });
    SkillService.getApiServicesAppSkillGetAllByPersonId(id)
      .then((res) => {
        setPersonSkills({ state: "success", value: res["result"] });
      })
      .catch((error: AxiosError<ISkillErrorResponse>) => {
        setPersonSkills({ state: "error", error: error?.response?.data });
      });
  };

  const createSkillSet = (payload: SkillDto[]) => {
    setSkills({ state: "loading" });
    SkillService.postApiServicesAppSkillCreateSkillSet(payload)
      .then((res) => {
        setSkills({
          state: "success",
          value: res["result"],
        });
      })
      .catch((error: AxiosError<ISkillErrorResponse>) => {
        setSkills({ state: "error", error: error?.response?.data });
      });
  };

  const updateSkillSet = (payload: SkillDto[]) => {
    setSkills({ state: "loading" });
    SkillService.putApiServicesAppSkillUpdateSkillSet(payload)
      .then((res) => {
        setSkills({
          state: "success",
          value:res['result']
        });
      })
      .catch((error: AxiosError<ISkillErrorResponse>) => {
        setSkills({ state: "error", error: error?.response?.data });
      });
  };

  const deleteSkill = (id: any) => {
     setSkills({ state: "loading" });
     SkillService.deleteApiServicesAppSkillDelete(id).then((res) => {
        setSkills({
          state: "success",
          value:res['result']
        });
      })
  }

  const getAllSkills = () => {
    setSkills({ state: "loading" });
    SkillService.getApiServicesAppSkillGetAll()
      .then((res) => {
        setSkills({
          state: "success",
          value:res['result']
        });
      })
      .catch((error: AxiosError<ISkillErrorResponse>) => {
        setSkills({ state: "error", error: error?.response?.data });
      });
  };

  const memoizedState = useMemo(() => {
    return { skill, skills,personSkills };
  }, [skill,skills,personSkills]);

  const memoizedActions = useMemo(() => {
    return {
      getSkillsByPersonId,
      createSkillSet,
      updateSkillSet,
      getAllSkills,
      deleteSkill
    };
  }, [getSkillsByPersonId, createSkillSet, updateSkillSet,getAllSkills,deleteSkill]);

  return (
    <SkillState.Provider value={memoizedState}>
      <SkillActions.Provider value={memoizedActions}>
        {children}
      </SkillActions.Provider>
    </SkillState.Provider>
  );
};

const useSkillState = () => {
  const context = useContext(SkillState);
  return context;
};

const useSkillActions = () => {
  const context = useContext(SkillActions);
  return context;
};

const useSkill = () => {
  return { ...useSkillState(), ...useSkillActions() };
};

export { SkillProvider, useSkill, useSkillState, useSkillActions };
