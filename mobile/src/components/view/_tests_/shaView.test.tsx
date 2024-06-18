import React from 'react';
import { create, act } from 'react-test-renderer';
import ShaView from '../shaView';

const tree = create(<ShaView />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('shaView isDefined', () => {
  expect(<ShaView />).toBeDefined();
});

test('shaView render', () => {
  expect(tree.root.props.children).toEqual(undefined);

  act(() => {
    tree.update(
      <ShaView style={{ flex: 1 }}>
        <ShaView />
      </ShaView>
    );
  });
  expect(tree.root.props.children).toEqual(<ShaView />);
  expect(tree.root.props.style.flex).toEqual(1);
});
