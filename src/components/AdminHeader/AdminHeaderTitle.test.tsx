import { render, screen } from "@testing-library/react"
import AdminHeaderTitle from "./AdminHeaderTitle"

describe("Admin header title", () => {
    const mockProps = {
        title: "Admin header title"
    }
    
    it("should render the header container", () => {
        render(<AdminHeaderTitle {...mockProps}/>)
        expect(screen.getByTestId("headerContainer")).toBeInTheDocument();
    })

    it("should display admin text title for the forms", () => {
        render(<AdminHeaderTitle {...mockProps}/> )
        const headerTitle = screen.getByText(mockProps.title);
        expect(headerTitle).toBeInTheDocument();
    })
})