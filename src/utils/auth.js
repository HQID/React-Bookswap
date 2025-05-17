import Cookies from "js-cookie";
import  decode from "jwt-decode"; // Corrected import

export function getToken() {
    return Cookies.get("token");
}

export function decodeToken() {
    const token = getToken();
    if (!token) return null;
    try {
        return decode(token); // Updated to use the correct function
    } catch (err) {
        console.error("Failed to decode token:", err);
        return null;
    }
}