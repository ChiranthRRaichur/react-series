import Body from "../Body";
import SearchBar from "../SearchBar";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mockData/ResListMock.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "@testing-library/react";
//this is rendered inside a JSDOM (its a browser like thing not a browser)

// Fetch(async operation) mock data since the testlibrary does tesing in JSDOM and not real Browser
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should search pizza in search space after clicking search button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  expect(searchBtn).toBeInTheDocument();

  const searchInput = screen.getByPlaceholderText("Search for restaurants...");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  //screen should load 4 cards

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(4);
});
