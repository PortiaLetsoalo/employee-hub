import {useEffect, useState} from 'react';
import {usePerson} from '../../services/providers/person';
import {useSkill} from '../../services/providers/skill';
import {SkillDto} from '../../services/generated/api/models/SkillDto';

export const useHome = () => {
  const {person, persons, getAllPerson} = usePerson();
  const [skillsList, setSkillsList] = useState<SkillDto[]>([]);
  const {skills, skill, getAllSkills} = useSkill();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isEditing] = useState<boolean>(false);
  const [selectedDate, setDate] = useState(new Date());
  const [openModal, setModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filteredData, setFilteredData] = useState(undefined);

  useEffect(() => {
    getAllSkills();
  }, []);

  useEffect(() => {
    if (persons?.state !== 'success' ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  },[persons])

  const getSearchFilteredData = query => {
    getFilteredData(query, 'employeeDetails');
  };

  const getFilteredData = (query, filterKey?) => {
    setLoading(true);
    if (query !== '') {
      let filteredData;
      if (filterKey === 'employeeDetails') {
        filteredData = persons?.value?.filter(item =>
          Object.values(item).some(
            value =>
              typeof value === 'string' &&
              value.toLowerCase().includes(query.toLowerCase()),
          ),
        );
      } else if (filterKey === 'dateOfBirth') {
        filteredData = persons?.value?.filter(item => {
          const apiDateFormat = item?.dateOfBirth?.slice(0, 10);
          const queryDateFormat = new Date(query).toISOString().slice(0, 10);
          return apiDateFormat === queryDateFormat;
        });
      } else if (filterKey === 'skill') {
        const skillPersonIds = skills?.value
          ?.filter(skill =>
            Object.values(skill).some(value => {
              return (
                typeof value === 'string' &&
                value?.toLowerCase().includes(query?.toLowerCase())
              );
            }),
          )
          .map(skill => skill.personId);
        filteredData = persons?.value?.filter(person =>
          skillPersonIds.includes(person.id),
        );
      }else if (filterKey === 'all') {
        filteredData = persons?.value;
      }
      setFilteredData(filteredData);
      setLoading(false);
      return filteredData;
    } else {
      setLoading(false);
      setFilteredData(persons?.value);
      return persons?.value;
    }
  };

  const onSelectedFilter = onSelectedItem => {
    setSelectedFilter(onSelectedItem);
    setModalOpen(true);

    if (Object?.values(onSelectedItem)?.includes('All')) {
      setFilteredData(persons?.value);
    }
  };

  return {
    person,
    employeeData: filteredData ?? persons?.value,
    isLoading,
    setLoading,
    getAllSkills,
    skills,
    skill,
    skillsList,
    setSkillsList,
    openModal,
    setModalOpen,
    selectedDate,
    setDate,
    selectedFilter,
    setSelectedFilter,
    getFilteredData,
    persons,
    isEditing,
    getAllPerson,
    setFilteredData,
    onSelectedFilter,
    getSearchFilteredData
  };
};
