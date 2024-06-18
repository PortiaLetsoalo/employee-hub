import React, {
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { PersonCreateDto, PersonService } from "../../generated/api";
import { AxiosError } from "axios";
import {
  IPersonErrorResponse,
  IPersonStateContext,
  PersonActions,
  PersonState,
} from "./context";

const PersonProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [person, setPerson] = useState<IPersonStateContext["person"]>();
  const [persons, setPersons] = useState<IPersonStateContext["persons"]>();

  const getPersonById = (id: any) => {
    setPerson({ state: "loading" });
    PersonService.getApiServicesAppPersonGet(id)
      .then((res) => {
        setPerson({ state: "success", value: res["result"] });
      })
      .catch((error: AxiosError<IPersonErrorResponse>) => {
        setPerson({ state: "error", error: error?.response?.data });
      });
  };

 const createPerson = (payload: PersonCreateDto) : Promise<PersonCreateDto> =>
    new Promise((resolve, reject) => {
      setPerson({ state: "loading" });
    PersonService.postApiServicesAppPersonCreateAsyc(payload)
      .then((res) => {
        setPerson({ state: "success", value: res["result"] });
        resolve(res["result"] )
      }).catch((error: AxiosError<IPersonErrorResponse>) => {
        setPerson({ state: "error", error: error?.response?.data });
        reject(error?.response?.data)
      });
     });
  
  const updatePerson = (payload: PersonCreateDto) : Promise<PersonCreateDto> =>
    new Promise((resolve, reject) => {
      setPerson({ state: "loading" });
    PersonService.putApiServicesAppPersonUpdate(payload)
      .then((res) => {
        setPerson({ state: "success", value: res["result"] });
        resolve(res["result"] )
      }).catch((error: AxiosError<IPersonErrorResponse>) => {
        setPerson({ state: "error", error: error?.response?.data });
        reject(error?.response?.data)
      });
     });
  

  const getAllPerson = () => {
    setPerson({ state: "loading" });
    PersonService.getApiServicesAppPersonGetAll()
      .then((res) => {
        setPersons({
          state: "success",
          value:res['result']
        });
      })
      .catch((error: AxiosError<IPersonErrorResponse>) => {
        setPersons({ state: "error", error: error?.response?.data });
      });
  };



  const memoizedState = useMemo(() => {
    return { person ,persons};
  }, [person,persons]);

  const memoizedActions = useMemo(() => {
    return {
      getPersonById,
      createPerson,
      updatePerson,
      getAllPerson
    };
  }, [createPerson, getPersonById, updatePerson,getAllPerson]);

  return (
    <PersonState.Provider value={memoizedState}>
      <PersonActions.Provider value={memoizedActions}>
        {children}
      </PersonActions.Provider>
    </PersonState.Provider>
  );
};

const usePersonState = () => {
  const context = useContext(PersonState);
  return context;
};

const usePersonActions = () => {
  const context = useContext(PersonActions);
  return context;
};

const usePerson = () => {
  return { ...usePersonState(), ...usePersonActions() };
};

export { PersonProvider, usePerson, usePersonState, usePersonActions };
