import {render, screen} from "@testing-library/react";
import Navbar from "./Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Page from "../Page/_Routes";

describe('Testing navbar :', () => {
    test('renders menu links and these link are linking with page element', () => {
    render(<Router><Navbar/><Page/></Router>);

    expect(screen.getByRole('navigation')).toBeVisible();

    const menuAboutLink = screen.getByTestId('menu-about');
    expect(menuAboutLink).toBeInTheDocument();
    menuAboutLink.click();
    const linkElement3 = screen.getByTestId('page-about');
    expect(linkElement3).toBeInTheDocument();


    const menuDashboardLink = screen.getByTestId('menu-dashboard');
    expect(menuDashboardLink).toBeInTheDocument();
    menuDashboardLink.click();
    const linkElement4 = screen.getByTestId('page-dashboard');
    expect(linkElement4).toBeInTheDocument();


    });
});