import { render, screen } from "@testing-library/react"
import InputError, { InputErrorProps } from "./InputError"

describe("InputError component", () => {
    
    it("should display error if the path[0] is equal to name", () => {
        const mockProps: InputErrorProps = {
            message: "Invalid email",
            path: ["email"],
            name: "email"
        }
        render(<InputError {...mockProps} />)
        const textError = screen.getByText(mockProps.message);
        expect(textError).toBeInTheDocument();
    });

    it("should not display if path does not equal name", () => {
        const mockProps: InputErrorProps = {
            message: "Invalid email",
            path: ["password"],
            name: "email",
        }
        render(<InputError {...mockProps}/>)
        expect(screen.queryByText(mockProps.message)).not.toBeInTheDocument();
    })

    it("should not display if path[]", () => {
        const mockProps: InputErrorProps = {
            message: "This is required",
            path: [],
            name: "email"
        }
        render(<InputError {...mockProps}/>)
        const textError = screen.queryByText(mockProps.message);
        expect(textError).not.toBeInTheDocument()
    });
})