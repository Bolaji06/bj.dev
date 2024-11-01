
import BlogCard, { BlogCardProps } from "./BlogCard";
import { render, screen } from "@testing-library/react";

// jest.mock("../../utils/utils", () => ({
//     timeStamp: jest.fn((timestamp) => timestamp)
// }));

describe('BlogCard Component', ()=> {
    const mockProps: BlogCardProps = {
        id: 1,
        slug: "test-blog-slug",
        title: "Test Blog Title",
        description: "Test blog description",
        published_at: "31 October, 2023",
    }

    it("renders the blog container", () => {
        render(<BlogCard {...mockProps}/>)
        const container = screen.getByTestId("blogContainer");
        expect(container).toBeInTheDocument();
    })

    it("renders blog image wrapper", () => {
        render(<BlogCard {...mockProps} />)
        const blogImageWrapper = screen.getByTestId("blogImageWrapper");
        expect(blogImageWrapper).toBeInTheDocument();
    })

    it("renders the FaBookOpen icon", () => {
        render(<BlogCard {...mockProps}/>)
        const blogIcon = screen.getByRole('img', { hidden: true });
        expect(blogIcon).toBeInTheDocument();
    })

    it("displays the correct published date", () => {
        render(<BlogCard {...mockProps}/>);
        const textTimestamp = screen.getByText(mockProps.published_at);
        expect(textTimestamp).toBeInTheDocument();
    })

    it("displays the correct title and description", () => {
        render(<BlogCard {...mockProps}/>);
        const title = screen.getByText(mockProps.title);
        const description = screen.getByText(mockProps.description);

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
    });

    it("has the correct link to the blog post", () => {
        render(<BlogCard {...mockProps} />);
        const blogLink = screen.getByRole("link", { name: /read more/i });
        expect(blogLink).toHaveAttribute('href', `/blog/${mockProps.slug}`);
    })


})