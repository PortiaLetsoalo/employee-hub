import {useEffect, useState} from 'react';
import {PersonCreateDto, SkillDto} from 'src/services/generated/api';
import {usePerson} from '../../services/providers/person';
import {useSkill} from '../../services/providers/skill';
import {useCountries} from '../../services/providers/countries';
import Toast from 'react-native-toast-message';
import {generateGUID} from '../../utils/index';

export const useEmployeeDetails = (navigation: any) => {
  type PersonWithSkills = PersonCreateDto & SkillDto;
  const [form, setForm] = useState<PersonWithSkills>({} as PersonWithSkills);
  const [errors, setErrors] = useState<Partial<PersonWithSkills>>({});
  const {createPerson, getPersonById, person, persons, updatePerson} =
    usePerson();
  const {
    skills,
    skill,
    createSkillSet,
    getSkillsByPersonId,
    updateSkillSet,
    personSkills,
    deleteSkill,
  } = useSkill();
  const [isLoading, setLoading] = useState<boolean>(false);
  const {countries, getCountries} = useCountries();
  const [skillsList, setSkillsList] = useState<SkillDto[]>([]);

  useEffect(() => {
    getCountries();
  }, []);

  const onValidate = (): boolean => {
    let isValid = true;
    if (!form.firstName) {
      setErrors((s: any) => ({...s, firstName: 'First name is required'}));
      isValid = false;
    }

    if (!form.lastName) {
      setErrors((s: any) => ({...s, lastName: 'Last name is required'}));
      isValid = false;
    }
    if (!form.country) {
      setErrors((s: any) => ({...s, country: 'Country is required'}));
      isValid = false;
    }

    // if (!form.dateOfBirth) {
    //   setErrors((s: any) => ({...s, dateOfBirth: 'DateOfBirth is required'}));
    //   isValid = false;
    // }

    if (!form.postalCode) {
      setErrors((s: any) => ({...s, postalCode: 'PostalCode is required'}));
      isValid = false;
    }

    if (!form.city) {
      setErrors((s: any) => ({...s, city: 'city is required'}));
      isValid = false;
    }
    if (!form.streetName) {
      setErrors((s: any) => ({...s, streetName: 'Street Name is required'}));
      isValid = false;
    }

    if (form && form.contactNumber && form.contactNumber.length !== 10) {
      setErrors((s: any) => ({
        ...s,
        contactNumber: 'Contact Number should have a maximum of 10 digits',
      }));
      isValid = false;
    }

    if (!form?.emailAddress) {
      setErrors((s: any) => ({
        ...s,
        emailAddress: 'Email is required',
      }));
      isValid = false;
    }
    if (form && form?.emailAddress && !form?.emailAddress?.includes('@')) {
      setErrors((s: any) => ({
        ...s,
        emailAddress: 'Email is invalid',
      }));
      isValid = false;
    }

    return isValid;
  };

  const onChange = (name: keyof PersonWithSkills, value: any) => {
    setErrors((s: any) => ({...s, [name]: undefined}));
    setForm((s: any) => ({...s, [name]: value}));
  };
  const createEmployee = () => {
    if (onValidate()) {
      createPerson(form)
        .then(res => {
          skillsList?.map(item => {
            item.personId = res?.id;
          });
          createSkillSet(skillsList);
          navigation.goBack();
          setTimeout(() => {
            Toast.show({
              type: 'success',
              text1: 'Employee created successfully',
            });
          }, 1000);
        })
        .catch(() => {
          navigation.goBack();
          setTimeout(() => {
            Toast.show({
              type: 'error',
              text1: 'Failed to create an employee',
              text2: 'please try again',
            });
          }, 1000);
        });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Missing fields',
        text2: 'please fill the required fields',
      });
    }
  };

  const updateEmployee = (employeeId: string) => {
    if (onValidate()) {
      const employeePayload = {...form, id: employeeId};
      updatePerson(employeePayload)
        .then(res => {
          skillsList?.map(item => {
            item.personId = res?.id;
          });
          updateSkillSet(skillsList);
          navigation.goBack();
          setTimeout(() => {
            Toast.show({
              type: 'success',
              text1: 'Employee updated successfully',
            });
          }, 1000);
        })
        .catch(() => {
          Toast.show({
            type: 'error',
            text1: 'Failed to update employee',
            text2: 'please try again',
          });
        });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Missing fields',
        text2: 'please fill in all required fields',
      });
    }
  };

  const getEmployee = (id: string) => {
    getPersonById(id);
    if (person?.state === 'error') {
      Toast.show({
        type: 'error',
        text1: 'Failed to get employee details',
      });

      setTimeout(() => {
        navigation.goBack();
      }, 1000);
    }
  };

  const getSkills = (id: string) => {
    getSkillsByPersonId(id);
    if (personSkills?.value?.length > 0) {
      setSkillsList(personSkills?.value);
    }
    if (personSkills?.state === 'error') {
      Toast.show({
        type: 'error',
        text1: 'Failed to get skills',
      });
      setTimeout(() => {
        navigation?.goBack();
      }, 1000);
    }
  };

  const addSkill = () => {
    setSkillsList([
      ...skillsList,
      {
        id: generateGUID(),
        name: '',
        yearsOfExperience: 0,
        seniorityRatingName: '',
      },
    ]);
  };

  const removeSkill = (index: number) => {
    const selectedItem = skillsList[index];
    const updatedSkills = skillsList?.filter((_, i) => i !== index);
    setSkillsList(updatedSkills);
    deleteSkill(selectedItem?.id);
  };

  const updateSkill = (
    index: number,
    field: string,
    value: string,
    id: string,
  ) => {
    const updatedSkills = skillsList?.map((skill, i) =>
      i === index ? {...skill, [field]: value, id: id} : skill,
    );
    setSkillsList(updatedSkills);
  };

  return {
    form,
    setForm,
    createEmployee,
    updateEmployee,
    createSkillSet,
    updateSkillSet,
    person,
    skills,
    getEmployee,
    getSkills,
    persons,
    skill,
    onChange,
    setSkillsList,
    skillsList,
    errors,
    isLoading,
    getSkillsByPersonId,
    setLoading,
    addSkill,
    removeSkill,
    updateSkill,
    personSkills,
    countries,
  };
};
