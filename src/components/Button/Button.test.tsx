import { render } from "@testing-library/react"
import Button from "./Button"


describe("Button", () => {
    it("it should display a button", () => {
        const { getByTestId } = render(<Button />);
        expect(getByTestId('custom-button')).toBeInTheDocument();
    });

    it ("it should contain a react node", () => {
        const { getByTestId } = render(<Button />);
        expect(getByTestId("custom-button")).not.toBeEmptyDOMElement();
    })
})