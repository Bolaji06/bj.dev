import { cookies } from "next/headers"

export async function getToken(): Promise<string | null>{
    const hasToken = (await cookies()).has("bj.dev-token");
    if(!hasToken){
        return null;
    }
    return (await cookies()).get("bj.dev-token")?.value || null;
}