import { render } from '@testing-library/react';
import React from 'react';
import Quote from '../Quote';

it('Quote renders as expected', () => {
  const Task = render(<Quote />);
  expect(Task).toMatchSnapshot();
});
