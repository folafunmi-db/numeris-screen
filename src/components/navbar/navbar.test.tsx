import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // for matchers like toBeInTheDocument
import { Navbar } from "./"; // Adjust the path as necessary

// Mocking the icon components
jest.mock("../icons/bell", () => ({
  Bell: () => <svg data-testid="bell-icon" />,
}));

jest.mock("../icons/chevron-down", () => ({
  ChevronDown: () => <svg data-testid="chevron-icon" />,
}));

describe("Navbar", () => {
  it("renders the heading correctly", () => {
    render(<Navbar />);
    // Test for the presence of the "INVOICE" heading
    const heading = screen.getByRole("heading", { name: /invoice/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("INVOICE");
  });

  it("renders the Bell and ChevronDown icons", () => {
    render(<Navbar />);
    // Test for the Bell icon
    const bellIcon = screen.getByTestId("bell-icon");
    expect(bellIcon).toBeInTheDocument();

    // Test for the ChevronDown icon
    const chevronIcon = screen.getByTestId("chevron-icon");
    expect(chevronIcon).toBeInTheDocument();
  });

  it("renders user profile button with text KO", () => {
    render(<Navbar />);
    // Test for the user profile button with "KO"
    const userProfileButton = screen.getByText("KO");
    expect(userProfileButton).toBeInTheDocument();
  });

  it("renders the buttons with correct classes", () => {
    render(<Navbar />);

    // Test for the Bell button
    const bellButton = screen.getByTestId("bell-button");
    expect(bellButton).toHaveClass("bg-white rounded-full w-[64px] h-[64px]");

    // Test for the user profile button
    const profileButton = screen.getByTestId("avatar");
    expect(profileButton).toHaveClass("bg-white rounded-[40px] p-3");
  });
});
