import { render, screen } from "@testing-library/react";
import App from "../pages/index";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    const textOnScreen = screen.getByText("My tech courses hosted on Thinkster.io");
    expect(textOnScreen).not.toBeNull();
  });
});