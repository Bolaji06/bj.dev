
import { jwtDecode } from "jwt-decode";


export function decrypt(token: string){
    const decodeToken = jwtDecode(token);
    return decodeToken;
}