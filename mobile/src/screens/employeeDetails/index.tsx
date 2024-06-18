import React, {useEffect} from 'react';
import type {FC} from 'react';
import {getStyling} from './style';
import ShaView from '../../components/view/shaView';
import ShaText from '../../components/text/shaText';
import ShaButton from '../../components/button/shaButton';
import ShaInput from '../../components/input/shaInput';
import ShaDateTimePicker from '../../components/dateTimePicker/shaDateTimePicker';
import ShaDropdown from '../../components/dropDown/shaDropdown';
import ShaDivider from '../../components/divider/shaDivider';
import {ScrollView} from 'react-native';
import {useEmployeeDetails} from './util';
import ShaLoader from '../../components/loader/shaLoader';
import {seniorityRatingRefList} from '../../types/enums/RefListSeniorRating';
import Toast from 'react-native-toast-message';

const EmployeeDetails: FC<any> = (props: any) => {
  const {route, navigation} = props;
  const {employee, isEditing} = route?.params ?? {};
  const styles = getStyling();
  const {
    form,
    setForm,
    createEmployee,
    updateEmployee,
    onChange,
    errors,
    getSkills,
    skillsList,
    addSkill,
    removeSkill,
    updateSkill,
    personSkills,
    setSkillsList,
  } = useEmployeeDetails(navigation);

  useEffect(() => {
    if (employee?.id) {
      getSkills(employee?.id);
    }
  }, []);

  useEffect(() => {
    const skills =
      employee === undefined
        ? [{name: '', yearsOfExperience: 0, seniorityRatingName: ''}]
        : personSkills?.value;
    setSkillsList(skills);
  }, [personSkills]);

  useEffect(() => {
    setForm((prevState: any) => ({
      ...prevState,
      firstName: employee?.firstName || prevState.firstName,
      lastName: employee?.lastName || prevState.lastName,
      contactNumber: employee?.contactNumber || prevState.contactNumber,
      dateOfBirth: employee?.dateOfBirth || prevState.dateOfBirth,
      city: employee?.city || prevState.city,
      postalCode: employee?.postalCode || prevState.postalCode,
      country: employee?.country || prevState.country,
      streetName: employee?.streetName || prevState.streetName,
      emailAddress: employee?.emailAddress || prevState.emailAddress,
    }));
  }, []);

  return (
    <ShaView style={styles.container}>
      <ScrollView>
        <ShaView style={styles.formContainer}>
          <ShaText style={[styles.label, {color: '#053787'}]}>
            Basic Info
          </ShaText>
          <ShaDivider containerStyle={styles.divider} />
          <ShaView style={styles.firstSection}>
            <ShaInput
              label="First Name"
              labelStyle={styles.label}
              containerStyle={{width: '35%', marginRight: 5}}
              inputStyle={styles.input}
              value={!isEditing ? form?.firstName : employee?.firstName}
              onChangeText={value => onChange('firstName', value)}
              errorMessage={errors?.firstName}
              required={true}
            />
            <ShaInput
              label="Last Name"
              labelStyle={styles.label}
              containerStyle={{width: '65%'}}
              inputStyle={styles.input}
              value={!isEditing ? form?.lastName : employee?.lastName}
              onChangeText={value => onChange('lastName', value)}
              errorMessage={errors?.lastName}
              required={true}
            />
          </ShaView>
          <ShaInput
            label="Contact Number"
            labelStyle={styles.label}
            keyboardType="numeric"
            inputStyle={styles.input}
            value={!isEditing ? form?.contactNumber : employee?.contactNumber}
            onChangeText={value => onChange('contactNumber', value)}
            errorMessage={errors?.contactNumber}
            required={true}
          />
          <ShaInput
            label="Email Address"
            labelStyle={styles.label}
            keyboardType="email-address"
            inputStyle={styles.input}
            value={!isEditing ? form?.emailAddress : employee?.emailAddress}
            onChangeText={value => onChange('emailAddress', value)}
            errorMessage={errors?.emailAddress}
            required={true}
          />
          <ShaDateTimePicker
            date={new Date()}
            mode="date"
            label={!isEditing ? form?.dateOfBirth : employee?.dateOfBirth}
            modal={true}
            labelText={'Date of Birth'}
            labelStyle={styles.label}
            touchableContainerStyle={styles.input}
            iconStyle={{color: 'black', backgroundColor: 'red', padding: 10}}
            displayText={{color: 'black'}}
            onConfirm={date => {
              onChange('dateOfBirth', date);
            }}
            onCancel={() => {}}
          />
          <ShaView style={{marginTop: 10}}>
            <ShaText style={[styles.label, {color: '#053787'}]}>
              Address Info
            </ShaText>
            <ShaDivider containerStyle={styles.divider} />
            <ShaInput
              label="Street Address"
              labelStyle={styles.label}
              inputStyle={styles.input}
              value={!isEditing ? form?.streetName : employee?.streetName}
              onChangeText={value => onChange('streetName', value)}
              errorMessage={errors?.streetName}
              required={true}
            />
            <ShaView style={styles.insideContainer}>
              <ShaInput
                label="City"
                inputStyle={styles.input}
                labelStyle={styles.label}
                containerStyle={{width: '33%', marginRight: 5}}
                value={!isEditing ? form?.city : employee?.city}
                onChangeText={value => onChange('city', value)}
                errorMessage={errors?.city}
                required={true}
              />
              <ShaInput
                label="Postal Code"
                inputStyle={styles.input}
                containerStyle={{width: '33%', marginRight: 5}}
                keyboardType="numeric"
                labelStyle={styles.label}
                value={!isEditing ? form?.postalCode : employee?.postalCode}
                onChangeText={value => onChange('postalCode', value)}
                errorMessage={errors?.postalCode}
                required={true}
              />
              <ShaInput
                label="Country"
                inputStyle={styles.input}
                containerStyle={{width: '33%'}}
                labelStyle={styles.label}
                value={!isEditing ? form?.country : employee?.country}
                onChangeText={value => onChange('country', value)}
                errorMessage={errors?.country}
                required={true}
              />
            </ShaView>
          </ShaView>
          <ShaText style={[styles.label, {color: '#053787'}]}>Skills</ShaText>
          <ShaDivider containerStyle={styles.divider} />
          {personSkills?.state === 'loading' ? null : (
            <ShaView style={styles.insideContainer}>
              <ShaView style={{width: '30%'}}>
                <ShaText style={styles.columnlabel}>Skill</ShaText>
              </ShaView>
              <ShaView style={{width: '20%'}}>
                <ShaText style={styles.columnlabel}>Yrs Exp</ShaText>
              </ShaView>
              <ShaView style={{width: '40%'}}>
                <ShaText style={styles.columnlabel}>Seniority Rating</ShaText>
              </ShaView>
              <ShaView style={{width: '10%'}}>
                <ShaText style={styles.columnlabel}></ShaText>
              </ShaView>
            </ShaView>
          )}
          <ShaLoader
            loading={personSkills?.state === 'loading'}
            color="white"
            size={50}
          />
          {skillsList?.map((item, index) => (
            <ShaView key={index} style={styles.insideContainer}>
              <ShaView style={{width: '30%'}}>
                <ShaInput
                  labelStyle={{marginTop: 0}}
                  inputStyle={styles.input}
                  containerStyle={{marginRight: 5}}
                  value={item.name}
                  onChangeText={value =>
                    updateSkill(index, 'name', value, item?.id)
                  }
                  errorMessage={errors?.name}
                  required={true}
                />
              </ShaView>
              <ShaView style={{width: '20%'}}>
                <ShaInput
                  containerStyle={{marginRight: 5, marginLeft: 5}}
                  keyboardType="numeric"
                  inputStyle={styles.input}
                  value={item.yearsOfExperience.toString()}
                  onChangeText={value => {
                    console.log('item', item);
                    updateSkill(index, 'yearsOfExperience', value, item?.id);
                  }}
                  errorMessage={errors?.yearsOfExperience?.toString()}
                  required={true}
                />
              </ShaView>
              <ShaView style={{width: '40%'}}>
                <ShaDropdown
                  data={seniorityRatingRefList}
                  valuePropName="description"
                  placeholder=""
                  iconColor="white"
                  styles={{
                    container: {marginRight: 5, marginLeft: 5},
                    input: [styles.input, {opacity: 1}],
                  }}
                  value={item?.seniorityRatingName}
                  onChangeText={(value: any) => {
                    updateSkill(
                      index,
                      'seniorityRating',
                      value?.value,
                      item?.id,
                    );
                  }}
                  onSelected={value => {
                    updateSkill(
                      index,
                      'seniorityRating',
                      value?.value,
                      item?.id,
                    );
                  }}
                  errorMessage={errors?.seniorityRatingName}
                />
              </ShaView>
              <ShaView style={{width: '10%'}}>
                <ShaButton
                  onPress={() => removeSkill(index)}
                  buttonStyle={{backgroundColor: 'red'}}
                  text="Employee"
                  // icon={{
                  //   name: 'delete',
                  //   type: 'font-awesome',
                  //   size: 16,
                  //   color: 'white',
                  // }}
                />
              </ShaView>
            </ShaView>
          ))}
          <ShaView style={styles.buttonsContainer}>
            <ShaButton
              onPress={addSkill}
              buttonStyle={styles.button}
              // icon={{name: 'close', type: 'ant-design', size: 16}}
              text="Add New Skill"
            />
          </ShaView>
          <ShaView
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              paddingTop: 50,
              marginBottom: 10,
            }}>
            <ShaButton
              onPress={() => {
                employee === undefined
                  ? createEmployee()
                  : updateEmployee(employee?.id);
              }}
              buttonStyle={[
                styles.button,
                {borderRadius: 40, width: '50%', height: 55},
              ]}
              // icon={{name: 'close', type: 'ant-design', size: 16}}
              text="Save changes to Employee"
            />
          </ShaView>
        </ShaView>
      </ScrollView>
      <Toast />
    </ShaView>
  );
};

export default EmployeeDetails;
