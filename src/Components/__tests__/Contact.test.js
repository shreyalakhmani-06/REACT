import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page Test Case",() => {
    test ("Shoould load Contact us component", () => {
        render(<Contact/>);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    });

    test("Should load button inside Contact Component", () => {
        render(<Contact/>);

        const button=screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });

    test("Should load input name inside Contact Component",() => {
        render(<Contact/>);

        const inputName=screen.getByPlaceholderText("name");

        expect(inputName).toBeInTheDocument();
    });

    test("Should load 2 input boxes inside Contact Component", () => {
        render(<Contact/>);

        const inputBoxes=screen.getAllByRole("textbox");

        expect(inputBoxes.length).not.toBe(3);
    });
});
