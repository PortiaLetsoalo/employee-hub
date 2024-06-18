import React, {
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { CountriesService } from "../../generated/api";
import { AxiosError } from "axios";
import {
  ICountriesErrorResponse,
  ICountiriesStateContext,
  countriesState,
  countriesActions,
} from "./context";

const CountriesProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const [countries, setCountries] = useState<ICountiriesStateContext["countries"]>();

  const getCountries = () => {
    setCountries({ state: "loading" });
    CountriesService.getApiServicesAppCountriesGetAllCountries()
      .then((res) => {
        setCountries({
          state: "success",
          value: res["result"],
        });
      })
      .catch((error: AxiosError<ICountriesErrorResponse>) => {
        setCountries({ state: "error", error: error?.response?.data });
        console.log("UpdatePersonError", error);
      });
  };


  const memoizedState = useMemo(() => {
    return { countries };
  }, [countries]);

  const memoizedActions = useMemo(() => {
    return {
      getCountries,
    };
  }, [getCountries]);

  return (
    <countriesState.Provider value={memoizedState}>
      <countriesActions.Provider value={memoizedActions}>
        {children}
      </countriesActions.Provider>
    </countriesState.Provider>
  );
};

const useCountriestate = () => {
  const context = useContext(countriesState);
  return context;
};

const useCountriesActions = () => {
  const context = useContext(countriesActions);
  return context;
};

const useCountries = () => {
  return { ...useCountriestate(), ...useCountriesActions() };
};

export { CountriesProvider, useCountries, useCountriestate, useCountriesActions };
