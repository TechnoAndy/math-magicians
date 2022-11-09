/* /* eslint-disable indent */
import { render, screen } from '@testing-library/react';
import React from 'react';
import Calc from '../Calculator';

describe('Test for Calculator', () => {
  test('should render Calculator ', () => {
    render(<Calc />);
    expect(screen).toMatchSnapshot();
  });
});
