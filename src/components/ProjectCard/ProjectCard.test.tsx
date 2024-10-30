import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

jest.mock("next/image", () => ({
    __esModule: true,
    default: ({ src, alt }: { src: string; alt: string }) =>{
        return <img data-testid="MockProjectCardThumbnail" src={src} alt={alt}/>
    }
}))

describe("Project Card", () => {
    it("renders project with the project image", () => {
        const { getByTestId } = render(<ProjectCard />)

        const projectCardContainer = screen.getByTestId("ProjectCardContainer");
        const projectCardImageWrapper = screen.getByTestId("ProjectCardImageWrapper");
        const projectCardThumbnail = screen.getByTestId("MockProjectCardThumbnail");
        //expect(getByAltText('ProjectCardThumbnail')).toBe("Organi project thumbnail image")

        const projectCardTitleContainer = screen.getByTestId("ProjectCardTitleContainer");
        const projectCardTitle = screen.getByTestId("ProjectCardTitle");
        const projectCardDescription = screen.getByTestId("ProjectCardDescription");

        const projectCardToolsWrapper = screen.getByTestId("ProjectCardToolsWrapper");
        const projectCardToolsList = screen.getByTestId("ProjectCardToolsList");

        const projectCardFooter = screen.getByTestId("ProjectCardFooter");
        const projectCardReadMoreLink = screen.getByTestId("ProjectCardReadMoreLink");
        expect(getByTestId('ProjectCardReadMoreLink')).toHaveAttribute("href")
        const projectCardLiveLink = screen.getByTestId("ProjectCardLiveLink");
        expect(getByTestId("ProjectCardLiveLink")).toHaveAttribute("href")

        expect(projectCardContainer).toBeInTheDocument();
        expect(projectCardImageWrapper).toBeInTheDocument();
        expect(projectCardThumbnail).toBeInTheDocument();

        

        expect(projectCardTitleContainer).toBeInTheDocument();
        expect(projectCardTitle).toBeInTheDocument();
        expect(projectCardDescription).toBeInTheDocument();
        
        expect(projectCardToolsWrapper).toBeInTheDocument();
        expect(projectCardToolsList).toBeInTheDocument();

        expect(projectCardFooter).toBeInTheDocument();
        expect(projectCardReadMoreLink).toBeInTheDocument();
        
        expect(projectCardLiveLink).toBeInTheDocument();
    });
})
