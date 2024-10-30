
import { render } from "@testing-library/react";
import Logo from "./Logo";
import logo from '../../../public/logo.png'


describe('Logo', () => {
    it("renders correctly", () => {
        const { getByAltText } = render(<Logo src={logo} />);
        expect(getByAltText("bj.dev logo")).toBeInTheDocument();
    })
})