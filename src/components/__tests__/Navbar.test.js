import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { render } from '@testing-library/react';
import Nav from '../Navbar';

it('Nav renders as expected', () => {
  const Task = render(
    <Router>
      <Nav />
    </Router>,
  );
  expect(Task).toMatchSnapshot();
  
});
