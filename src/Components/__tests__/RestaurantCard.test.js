import { render, screen } from '@testing-library/react';
import RestaurantCard from '../RestaurantCards';
import MOCK_DATA from "../mocks/resCardMock.json";
import '@testing-library/jest-dom';

test("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument("Chinese Wok");
});