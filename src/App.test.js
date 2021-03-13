import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from './App';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('Counter', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

test('renders home at start', () => {
  const container = render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();

  const linkElement1 = screen.getByText(/learn react/i);
  expect(linkElement1).toBeInTheDocument();
  const linkElement2 = screen.getByText(/Home content/i);
  expect(linkElement2).toBeInTheDocument();

});

test('renders menu links and these link are linking', () => {
  const container = render(<App />);
  const menuAboutLink = screen.getByTestId('menu-about');
  expect(menuAboutLink).toBeInTheDocument();
  menuAboutLink.click();

  const linkElement3 = screen.getByText(/About content/i);
  expect(linkElement3).toBeInTheDocument();


  const menuDashboardLink = screen.getByTestId('menu-dashboard');
  expect(menuDashboardLink).toBeInTheDocument();
  menuDashboardLink.click();

  const linkElement4 = screen.getByText(/Dashboard content/i);
  expect(linkElement4).toBeInTheDocument();


});
