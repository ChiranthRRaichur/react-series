import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import React from "react";
import "@testing-library/jest-dom";


describe("Contact Component", () => {
  
  test("Should render Contact component", () => {
    render(<Contact />);
    //screen.debug();

    // function matcher, since the text content includes both "Contact" and "Us" and these two are split in different tags
    const header = screen.getByText("Contact");

    /* or
  expect(screen.getByRole("heading", { name: /contact us/i })).toBeInTheDocument();
*/

    //Assertion
    expect(header).toBeInTheDocument();
  });

  test("Should load button inside Contact component ", () => {
    render(<Contact />);
    const header = screen.getByRole("button");

    //Assertion
    expect(header).toBeInTheDocument();
  });

  test("Should load one textbox/ input box in the contact component", () => {
    render(<Contact />);
    const textboxes = screen.getAllByRole("textbox");
    expect(textboxes.length).toBe(3);
  });
});
