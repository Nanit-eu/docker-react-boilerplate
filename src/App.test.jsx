import React from 'react';
import ReactDOM from 'react-dom';
import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';

import App from './App';

import puppeteer from 'puppeteer'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});

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

    // Only local testing (not CI)

    if (process.env.SNAPSHOT !== 'no') {
        describe('Snapshot testing', () => {
            test('snapshot renders', () => {
                const component = renderer.create(<App/>);
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
            });
        });
    }
});

// Only local testing (not CI)

if (process.env.SNAPSHOT !== 'no') {
    it('has no change in home page', async () => {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
        await browser.close();
    });

    it('has no change in about page', async () => {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/About');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
        await browser.close();
    });

    it('has no change in dashboard page', async () => {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/Dashboard');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
        await browser.close();
    });

    it('has no change in 404 page', async () => {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/Error404');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
        await browser.close();
    });
}

