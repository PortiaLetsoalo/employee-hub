import React from 'react';
import { create, act } from 'react-test-renderer';
import ShaLoader from '../shaLoader';

jest.mock('react-native-paper', () => ({
    ActivityIndicator: 'ActivityIndicator',
}));

const tree = create(<ShaLoader loading></ShaLoader>);
test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('shaLoader isDefined', () => {
  expect(<ShaLoader />).toBeDefined();
});

test('shaLoader render', () => {
  expect(tree.root.props.loading).toEqual(true);
  act(() => {
    tree.update(<ShaLoader loading type="overlay"></ShaLoader>);
  });
  expect(tree.root.props.type).toEqual('overlay');
});
