

/**
 * fetch blog list
 * @param pageNumber - Number of page 
 * @param amount - Amount of blog list to fetch
 * @returns Array of blog posts
 */
export async function fetchBlogPost(pageNumber: number, amount: number){
    const DEVTO_API = `https://dev.to/api/articles?username=bolajibolajoko51&page=${pageNumber}&per_page=${amount}`
    try{
        const response = await fetch(DEVTO_API);
        if (!response.ok){
            return 'Fail to fetch blog post'
        }
        const data = await response.json();
        return data;

    }catch(error){
        if (error instanceof Error){
            return error.message;
        }
    }
}

export async function getBlogPost(slug: string){
    
    const API = `https://dev.to/api/articles/bolajibolajoko51/${slug}`;
    try{
        const response = await fetch(API);
        const data = await response.json();
        return data;

    }catch(error){
        if (error instanceof Error){
            return error.message;
        }
    }
}
