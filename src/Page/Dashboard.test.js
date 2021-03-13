import {render, screen} from "@testing-library/react";
import About from "./About";
import renderer from "react-test-renderer";
import React from "react";
import Dashboard from "./Dashboard";


describe('Testing header', () => {

    // Structure
    test('Structure : logo is visible', () => {
        render(<Dashboard/>);
        expect(screen.getByTestId('page-dashboard')).toBeVisible();
    });

    // Content
    test('Content: expected content is in document', () => {
        render(<Dashboard/>);
        expect(screen.getByText(/Dashboard content/i)).toBeInTheDocument();
    });

    // Content Snapshot

    if (process.env.SNAPSHOT !== 'no') {
            test('snapshot renders', () => {
                const component = renderer.create(<Dashboard/>);
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
        });
    }


});