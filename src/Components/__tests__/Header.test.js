import {fireEvent,render,screen} from "@testing-library/react";
import Header from "../Header";
import {Provider} from "react-redux";
import appstore from "../../../utils/appstore";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render Header Component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appstore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton=screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument();

});

test("Should render Header Component with 0 Cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appstore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItems=screen.getByText("Cart - (0)");

    expect(cartItems).toBeInTheDocument();

});

test("Should render Header Component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appstore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton=screen.getByRole("button",{name:"Login"});

    expect(loginButton).toBeInTheDocument();

});

