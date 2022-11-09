
import { render } from '@testing-library/react';
import React from 'react';
import Home from '../Home';

it('Home renders as expected', () => {
  const Task = render(<Home />);
  expect(Task).toMatchSnapshot();
});