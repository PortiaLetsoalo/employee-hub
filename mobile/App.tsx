import React, {FC} from 'react';
import Navigators from './src/navigators';
import {PersonProvider} from './src/services/providers/person';
import {SkillProvider} from './src/services/providers/skill';
import {CountriesProvider} from './src/services/providers/countries';

const App: FC<any> = () => {
  return (
    <>
      <PersonProvider>
        <CountriesProvider>
          <SkillProvider>
            <Navigators />
          </SkillProvider>
        </CountriesProvider>
      </PersonProvider>
    </>
  );
};

export default App;
