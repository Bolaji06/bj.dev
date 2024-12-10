import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  it("render the footer container", () => {
    render(<Footer />);
    const footerContainer = screen.getByTestId("footerContainer");
    expect(footerContainer).toBeInTheDocument();
  });

//   it("render the correct logo", () => {
//     render(<Footer />);
//     const logoImage = screen.getByTestId("logo");
//     expect(logoImage).toBeInTheDocument();
//   });

  it("display the trademark", () => {
    render(<Footer />);
    const trademarkText = screen.getByTestId("trademark");
    expect(trademarkText).toBeInTheDocument();
    expect(trademarkText).toHaveTextContent(/Bolaji Bolajoko © 2024/i);
  });

  it("render tools container", () => {
    render(<Footer />);
    const toolsContainer = screen.getByTestId("toolsContainer");
    expect(toolsContainer).toBeInTheDocument();
  });

  it("render the correct svg tools icons", () => {
    render(<Footer />);

    expect(screen.getByTestId("react-icon")).toBeInTheDocument();
    expect(screen.getByTestId("next-icon")).toBeInTheDocument();
    expect(screen.getByTestId("vercel-icon")).toBeInTheDocument();
  });

  it("display powered tools name", () => {
    render(<Footer  />)
    expect(screen.getByTestId("powered")).toBeInTheDocument();
    expect(screen.getByTestId("powered")).toHaveTextContent(
      "Powered By React, Nextjs, and Vercel"
    );
  });
});
