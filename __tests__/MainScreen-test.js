import React from 'react';
import {create} from 'react-test-render';
import MainScreen from '../src/screens/MainScreen';

const tree = create(<MainScreen />);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
