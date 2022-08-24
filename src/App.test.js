import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
// import Navigation from "./components/Navigation";
// import RouteSwitch from "./components/RouteSwitch";
import Contact from "./components/Contact";
import About from "./components/About";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Navigation Component", () => {
  it("renders homepage after clicking site name", () => {
    render(<App />);
    const link = screen.getByRole("link", { name: "Useless Inventions" });

    userEvent.click(link);

    expect(screen.getByRole("heading").textContent).toMatch(
      /Useless Inventions/i
    );
  });

  it("renders homepage after clicking home", () => {
    render(<App />);

    const link = screen.getByRole("link", { name: "Home" });

    userEvent.click(link);

    expect(screen.getByRole("heading").textContent).toMatch(
      /Useless Inventions/i
    );
  });

  it("renders products page after clicking Shop", () => {
    render(<Shop />);

    expect(screen.getByRole("heading").textContent).toMatch(/Products/i);
  });

  it("renders About page", () => {
    render(<About />);

    expect(screen.getByRole("heading").textContent).toMatch(/About/i);
  });

  it("renders Contact page", () => {
    render(<Contact />);

    expect(screen.getByRole("heading").textContent).toMatch(/Contact Us/i);
  });

  it("renders cart page", () => {
    render(<Cart />);

    expect(screen.getByRole("heading").textContent).toMatch(/Cart/i);
  });
});
