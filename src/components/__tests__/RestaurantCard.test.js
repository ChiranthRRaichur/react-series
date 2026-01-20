import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCards, { Withlabeleddiscount } from "../RestaurantCards";
import MOCK_DATA from "../mockData/ResCardMock.json";

const Labeleddiscount = Withlabeleddiscount(RestaurantCards);

describe("RestaurantCard Component", () => {
  test("Should render RestaurantCard Component with props data", () => {
    render(<RestaurantCards resData={MOCK_DATA} />);
    expect(screen.getByText(/kfc/i)).toBeInTheDocument();
  });

  it("Should render Restaurant card with discount label", () => {
    render(<Labeleddiscount resData={MOCK_DATA} />);
    expect(screen.getByText(/50% off/i)).toBeInTheDocument();
  });
});
