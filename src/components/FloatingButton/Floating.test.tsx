import { render, screen } from "@testing-library/react"
import FloatingButton from "./FloatingButton"

describe('FloatingButton Component', () => {

    it('render work status and link to contact', () => {
        render(<FloatingButton />)
        const contactLink = screen.getByTestId("link")
        expect(contactLink).toBeInTheDocument();
        expect(contactLink).toHaveAttribute("href", '#contact')
        expect(contactLink).toHaveTextContent(/open for work/i)
    });

    it("displays the pulse wrapper", () => {
        render(<FloatingButton />)
        const pulseDiv = screen.getByTestId("pulse");
        expect(pulseDiv).toBeInTheDocument();
    })
})