import React, {FC} from 'react';
import {ScrollView, View, FlatList} from 'react-native';
import ShaView from '../../components/view/shaView';
import ShaText from '../../components/text/shaText';
import ShaDropdown from '../../components/dropDown/shaDropdown';
import ShaAutocomplete from '../../components/autocomplete/shaAutocomplete';
import EmployeeListItem from './components/employeeListItem';
import {Screens} from '..';
import ShaImage from '../../components/image/shaImage';
import {useHome} from './util';
import {getStyling} from './style';
import DatePicker from 'react-native-date-picker';
import SkillListItem from './components/skillsListItem';
import ShaLoader from '../../components/loader/shaLoader';
import ShaButton from '../../components/button/shaButton';
import {EMPTYPLACEHOLDER} from '../../utils/constants/images';
import Toast from 'react-native-toast-message';
import {useFocusEffect} from '@react-navigation/native';
import {usePerson} from '../../services/providers/person';

const Home: FC<any> = props => {
  const styles = getStyling();
  const {navigation} = props;

  const {
    employeeData,
    setModalOpen,
    selectedDate,
    setDate,
    selectedFilter,
    getFilteredData,
    persons,
    skills,
    isEditing,
    isLoading,
    openModal,
    onSelectedFilter,
    getSearchFilteredData,
  } = useHome();
  const {getAllPerson} = usePerson();

  useFocusEffect(
    React.useCallback(() => {
      getAllPerson();
      return () => {
        getAllPerson();
        setModalOpen(false);
      };
    }, [navigation]),
  );

  const renderFilteredView = () => {
    if (openModal === false) return null;
    const distinctItemsByName = skills?.value?.reduce((acc, current) => {
      const isExist = acc.some(item => item.name === current.name);
      if (!isExist && current.name !== '') {
        acc.push(current);
      }
      return acc;
    }, []);

    if (Object?.values(selectedFilter)?.includes('Skills')) {
      return (
        <ShaView
          style={[
            styles.skillsFilter,
            {maxHeight: distinctItemsByName?.length === 0 ? 0 : 150},
          ]}>
          <FlatList
            data={distinctItemsByName}
            nestedScrollEnabled
            renderItem={({item}) => (
              <SkillListItem
                key={item?.id}
                {...item}
                onClicked={() => {
                  getFilteredData(item?.name, 'skill');
                  setTimeout(() => {
                    setModalOpen(false);
                  }, 1000);
                }}
              />
            )}
          />
        </ShaView>
      );
    } else if (Object?.values(selectedFilter)?.includes('Date of Birth')) {
      return (
        <>
          <DatePicker
            modal
            mode="date"
            open={true}
            date={selectedDate}
            onConfirm={date => {
              setModalOpen(false);
              setDate(date);
              getFilteredData(date, 'dateOfBirth');
            }}
            onCancel={() => {
              setModalOpen(false);
            }}
          />
        </>
      );
    }
    return null
  };

  return (
    <ShaView style={styles.container}>
      <View style={styles.scrollViewWrapper}>
        <ScrollView contentContainerStyle={[styles.scrollViewContent]}>
          <ShaView style={styles.innerContainer}>
            <ShaView>
              <ShaView style={styles.filterContainer}>
                <ShaView style={styles.searchBar}>
                  <ShaAutocomplete
                    data={[]}
                    valuePropName=""
                    placeholder="Search"
                    iconColor="transparent"
                    styles={{
                      container: {},
                      input: styles.autoCompInput,
                      inputMainContainer: {},                   
                    }}
                    getFilteredData={getSearchFilteredData}
                  />
                </ShaView>
                <ShaView style={styles.filterListContainer}>
                  <ShaDropdown
                    data={[
                      {name: 'Skills'},
                      {name: 'Date of Birth'},
                      {name: 'All'},
                    ]}
                    valuePropName={'name'}
                    placeholder="Filter by"
                    iconColor="white"
                    styles={{
                      iconContainer: {
                        position: 'absolute',
                        right: 10,
                        top: 0,
                        bottom: 20,
                        left: 50,
                      },
                      input: styles.dropdownInput,
                    }}
                    onSelected={onSelectedFilter}
                  />
                </ShaView>
                {/* <ShaView style={{width: '10%'}}></ShaView> */}
              </ShaView>
              <ShaView style={styles.totalContainer}>
                <ShaText style={styles.rowItem}>Total :</ShaText>
                <ShaText style={[styles.rowItem, {marginRight: 10}]}>
                  {employeeData?.length ?? 0}
                </ShaText>
              </ShaView>

              {persons?.value && persons?.value?.length ? (
                <>
                  <FlatList
                    data={employeeData ?? persons?.value}
                    nestedScrollEnabled
                    ListEmptyComponent={() => (
                      <ShaText style={styles.footerText}>No Data Found</ShaText>
                    )}
                    renderItem={({item}) => (
                      <EmployeeListItem
                        key={item?.id}
                        {...item}
                        onClicked={() => {
                          navigation.navigate(Screens.EmployeeDetails, {
                            employee: item,
                            isEditing: isEditing,
                          });
                        }}
                      />
                    )}
                  />
                </>
              ) : (
                <ShaView style={styles.centeredContainer}>
                  <>
                    <ShaLoader loading={isLoading} color="white" size={50} />
                    {persons?.value?.length === 0 &&
                    persons?.state === 'success' &&
                    !isLoading ? (
                      <>
                        <ShaImage
                          source={{
                            uri: EMPTYPLACEHOLDER,
                            height: 300,
                            width: 300,
                          }}
                          style={{marginBottom: 20}}
                        />
                        <ShaText
                          style={[
                            styles.title,
                            {marginVertical: 20, fontSize: 16},
                          ]}>
                          There is nothing here
                        </ShaText>
                        <ShaText style={styles.footer}>
                          Create a new employee by clicking the{' '}
                          <ShaText style={styles.title}>NEW EMPLOYEE</ShaText>{' '}
                          button to get started
                        </ShaText>
                      </>
                    ) : (
                      <>
                        {!isLoading && persons?.state === 'error' ? (
                          <ShaButton
                            onPress={() => {}}
                            buttonStyle={{
                              backgroundColor: 'transparent',
                              marginVertical: 40,
                            }}
                            text="something went wrong, try again"
                            icon={{
                              name: 'delete',
                              type: 'font-awesome',
                              size: 16,
                              color: 'white',
                              style: {marginRight: 5},
                            }}
                          />
                        ) : null}
                      </>
                    )}
                  </>
                </ShaView>
              )}
            </ShaView>
          </ShaView>
        </ScrollView>
      </View>
      {renderFilteredView()}
      <Toast />
    </ShaView>
  );
};

export default Home;
