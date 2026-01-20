import { render, screen } from "@testing-library/react";
import Header from "../Header";
import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
//import { useContext } from "react";

describe("Header Component", () => {
  beforeAll(() => {
    console.log("Before all tests");
  });

  beforeEach(() => {
    console.log("Before each test");
  });

  it("Should render Login button of Header component", () => {
    //render(<Header />);

    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
        ;
      </BrowserRouter>
    );
    //screen.debug();

    // Querying

    const loginButton = screen.getByRole("button", { hidden: true });

    //Assertion
    expect(loginButton).toBeInTheDocument();
  });
});
