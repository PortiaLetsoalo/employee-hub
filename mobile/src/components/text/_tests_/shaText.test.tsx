import React from 'react';
import { create, act } from 'react-test-renderer';
import ShaText from '../shaText';

const tree = create(
  <ShaText style={{ backgroundColor: 'red' }}>This is a test</ShaText>
);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('shaText isDefined', () => {
  expect(<ShaText />).toBeDefined();
});

test('shaText render', () => {
  expect(tree.root.props.children).toEqual('This is a test');
  expect(tree.root.props.style.backgroundColor).toEqual('red');

  act(() => {
    tree.update(
      <ShaText style={{ backgroundColor: 'green' }}>
        <ShaText>This is a nested ShaText</ShaText>
      </ShaText>
    );
  });
  expect(tree.root.props.children).toEqual(
    <ShaText>This is a nested ShaText</ShaText>
  );
  expect(tree.root.props.style.backgroundColor).toEqual('green');
});
