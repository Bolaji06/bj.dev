import { render, screen } from "@testing-library/react";
import UserForm from "./UserForm";

describe("User form component", () => {
  const mockProps = {
    user: {
      id: 1,
      name: "Bolaji Bolajoko",
      email: "josh@mail.com",
      bio: "this is Bolaji bio",
      photo: "photo.url",
      links: ["github", "linkdln"],
    },
  };

  it("it should render UserForm component", () => {
    render(<UserForm {...mockProps} />);
    expect(screen.getByTestId("user-form-container")).toBeInTheDocument();
  });

  it("it should render user form", () => {
    render(<UserForm {...mockProps} />);
    expect(screen.getByTestId("user-form")).toBeInTheDocument();
  });

  it("it should render the inputs container grid", () => {
    render(<UserForm {...mockProps} />);
    expect(screen.getByTestId("inputs-container-grid")).toBeInTheDocument();
  });

  it("should display full name label and input", () => {
    render(<UserForm {...mockProps} />);
    expect(screen.findByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.findByTestId("input-fullname")).toBeInTheDocument();
  });

  it("should display email label and input", () => {
    render(<UserForm {...mockProps} />);
    expect(screen.findByLabelText("Photo URL")).toBeInTheDocument();
    expect(screen.findByTestId("input-photourl")).toBeInTheDocument();
  });

  it("it should display social link label and input", () => {
    render(<UserForm {...mockProps} />);
    expect(screen.findByLabelText("Social Link")).toBeInTheDocument();
    expect(screen.findByTestId("input-socialLink")).toBeInTheDocument();
  });

  it("it should display social link add button", () => {
    render(<UserForm {...mockProps} />);
    expect(
      screen.findByRole("button", { name: "social-btn" })
    ).toBeInTheDocument();
  });

  it("it should display bio label and text-area", () => {
    render(<UserForm {...mockProps}/>);
    expect(screen.getByLabelText("Bio")).toBeInTheDocument();
    expect(screen.getByTestId("bio-textArea")).toBeInTheDocument();
  })

  it("it should display submit button", ()=> {
    render(<UserForm {...mockProps}/>);
    expect(screen.getByTestId("submit-btn")).toBeInTheDocument();
    
  })
});
