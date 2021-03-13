import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});

if (process.env.SNAPSHOT !== 'no') {
    describe('Snapshot testing', () => {
        test('snapshot renders', () => {
            const component = renderer.create(<App/>);
            let tree = component.toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
}
describe('Home page is complete', () => {

    test('Show HomeHeader', () => {
        render(<App/>);
        expect(screen.getByTestId('heading')).toBeInTheDocument();
    });


    test('menu-about link exists', () => {
        render(<App/>);
        const menuAboutLink = screen.getByTestId('menu-about');
        expect(menuAboutLink).toBeInTheDocument();
    });

    test('Footer', () => {
        render(<App/>);
        const menuAboutLink = screen.getByTestId('footer');
        expect(menuAboutLink).toBeVisible();
        expect(menuAboutLink).toBeInTheDocument();
    });

});


