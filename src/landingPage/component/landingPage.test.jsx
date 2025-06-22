import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";

describe("LandingPage Component", () => {
  test("renders the navbar with the correct title", () => {
    render(<LandingPage />);
    const navbarTitle = screen.getByText("Dew's Bank of India");
    expect(navbarTitle).toBeInTheDocument();
  });

  test("renders the hero section with welcome message", () => {
    render(<LandingPage />);
    const heroMessage = screen.getByText("Welcome to Our Website");
    expect(heroMessage).toBeInTheDocument();
  });

  test("renders the services section with a specific service", () => {
    render(<LandingPage />);
    const serviceItem = screen.getByText("Credit Card");
    expect(serviceItem).toBeInTheDocument();
  });

  // test("renders the FAQ component", () => {
  //   render(<LandingPage />);
  //   const faqSection = screen.getByTestId("faq");
  //   expect(faqSection).toBeInTheDocument();
  // });
});
