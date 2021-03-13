import {render, screen} from "@testing-library/react";
import About from "./About";
import renderer from "react-test-renderer";
import React from "react";
import Error404 from "./Error404";


describe('Testing header', () => {

    // Structure
    test('Structure : logo is visible', () => {
        render(<Error404/>);
        expect(screen.getByTestId('page-error404')).toBeVisible();
    });

    // Content
    test('Content: expected content is in document', () => {
        render(<Error404/>);
        expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
    });

    // Content Snapshot

    if (process.env.SNAPSHOT !== 'no') {
            test('snapshot renders', () => {
                const component = renderer.create(<Error404/>);
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
        });
    }


});