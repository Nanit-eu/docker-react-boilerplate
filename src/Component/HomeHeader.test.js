import {render, screen} from "@testing-library/react";
import HomeHeader from "./HomeHeader";
import App from "../App";

describe('Testing header', () => {

    test('Structure : logo is visible', () => {
        render(<HomeHeader/>);
        expect(screen.getByRole('img')).toBeVisible();
    });

    test('Content: expected content is in document', () => {
        render(<HomeHeader/>);
        expect(screen.getByText(/learn react/i)).toBeInTheDocument();
        expect(screen.getByText(/save to reload/i)).toBeInTheDocument();
    });

});