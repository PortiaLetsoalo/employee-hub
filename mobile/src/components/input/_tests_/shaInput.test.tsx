import React from 'react';
import { create, act } from 'react-test-renderer';
import ShaInput from '../shaInput';

jest.mock('@rneui/themed', () => ({
  Input: 'Input',
}));

jest.mock('../components/customLabel', () => 'CustomLabel');

const createShaInput = (props) => create(<ShaInput {...props} />);

describe('ShaInput Component', () => {
  let tree;

  beforeEach(() => {
    const defaultProps = {
      label: 'Username',
      required: true,
      onChangeText: jest.fn(),
      value: 'testuser',
      inputStyle: { borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10 },
      containerStyle: { marginBottom: 10 },
      inputContainerStyle: { backgroundColor: 'lightgray', borderRadius: 5, padding: 5 },
      labelStyle: { fontWeight: 'bold', fontSize: 16 },
    };

    tree = createShaInput(defaultProps);
  });

  it('matches snapshot', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('is defined', () => {
    expect(
      <ShaInput
        label="Username"
        required={true}
        onChangeText={jest.fn()}
        value="testuser"
        inputStyle={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10 }}
        containerStyle={{ marginBottom: 10 }}
        inputContainerStyle={{ backgroundColor: 'lightgray', borderRadius: 5, padding: 5 }}
      />
    ).toBeDefined();
  });

  it('renders with correct props', () => {
    const instance = tree.root;
    expect(instance.props.value).toEqual('testuser');
    expect(instance.props.label).toEqual('Username');
    expect(instance.props.required).toEqual(true);
    expect(instance.props.inputStyle).toEqual({ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10 });
    expect(instance.props.containerStyle).toEqual({ marginBottom: 10 });
    expect(instance.props.inputContainerStyle).toEqual({ backgroundColor: 'lightgray', borderRadius: 5, padding: 5 });
  });

  it('updates props correctly', () => {
    act(() => {
      tree.update(
        <ShaInput
          label="Email"
          required={false}
          onChangeText={jest.fn()}
          value="test@example.com"
          inputStyle={{ borderWidth: 2, borderColor: 'black', borderRadius: 8, padding: 12 }}
          containerStyle={{ marginTop: 20 }}
          inputContainerStyle={{ backgroundColor: 'white', borderRadius: 8, padding: 8 }}
        />
      );
    });

    const instance = tree.root;
    expect(instance.props.value).toEqual('test@example.com');
    expect(instance.props.label).toEqual('Email');
    expect(instance.props.required).toEqual(false);
    expect(instance.props.inputStyle).toEqual({ borderWidth: 2, borderColor: 'black', borderRadius: 8, padding: 12 });
    expect(instance.props.containerStyle).toEqual({ marginTop: 20 });
    expect(instance.props.inputContainerStyle).toEqual({ backgroundColor: 'white', borderRadius: 8, padding: 8 });
  });
});
