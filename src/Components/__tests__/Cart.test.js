import {fireEvent,render,screen} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import {Provider} from "react-redux";
import appstore from "../../../utils/appstore";
import {BrowserRouter} from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";


global.fetch=jest.fn(() => 
Promise.resolve({
    json:() => Promise.resolve(MOCK_DATA),
})
);
test("Should load restaurant menu component", async() => {
    await act(async () => render(
   <BrowserRouter>
           <Provider store={appstore}>
            <Header/>
             <RestaurantMenu />
             <Cart/>
           </Provider>
         </BrowserRouter>
    ));

    const accordianHeader=screen.getByText("Fish Starters (4)");

    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("FoodItems").length).toBe(4);

    expect(screen.getByText("Cart - (0)")).toBeInTheDocument();

    const AddBtns=screen.getAllByRole("button",{name:"Add+"});

    fireEvent.click(AddBtns[0]);

    expect(screen.getByText("Cart - (1)")).toBeInTheDocument();

    fireEvent.click(AddBtns[1]);

    expect(screen.getByText("Cart - (2)")).toBeInTheDocument();

    expect(screen.getAllByTestId("FoodItems").length).toBe(6);

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

    expect(screen.getAllByTestId("FoodItems").length).toBe(4);

    expect(screen.getByText("Cart is empty !!..Add items to your cart.")).toBeInTheDocument();
});