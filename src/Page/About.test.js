import {render, screen} from "@testing-library/react";
import About from "./About";
import renderer from "react-test-renderer";
import React from "react";


describe('Testing header', () => {

    // Structure
    test('Structure : logo is visible', () => {
        render(<About/>);
        expect(screen.getByTestId('page-about')).toBeVisible();
    });

    // Content
    test('Content: expected content is in document', () => {
        render(<About/>);
        expect(screen.getByText(/About me content/i)).toBeInTheDocument();
    });

    // Content Snapshot

    if (process.env.SNAPSHOT !== 'no') {
            test('snapshot renders', () => {
                const component = renderer.create(<About/>);
                let tree = component.toJSON();
                expect(tree).toMatchSnapshot();
        });
    }


});