import {render, screen} from "@testing-library/react";
import About from "./About";
import renderer from "react-test-renderer";
import React from "react";
import Home from "./Home";


describe('Testing header', () => {

    // Structure
    test('Structure : logo is visible', () => {
        render(<Home/>);
        expect(screen.getByTestId('page-home')).toBeVisible();
    });

    // Content
    test('Content: expected content is in document', () => {
        render(<Home/>);
        expect(screen.getByText(/Home content/i)).toBeInTheDocument();
    });

    // Content Snapshot

    if (process.env.SNAPSHOT !== 'no') {
            test('snapshot renders', () => {
                const component = renderer.create(<Home/>);
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
        });
    }


});