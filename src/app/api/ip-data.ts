/* eslint-disable @typescript-eslint/no-explicit-any */
const baseUrl = "https://ipinfo.io";
const apiKey = "052eb7cba6a843";

export const getIpData = async (ip?: string) => {
    const url = ip ? `${baseUrl}/${ip}?token=${apiKey}` : `${baseUrl}/?token=${apiKey}`;

    try {
        const response = await fetch(url).then(res => res.clone().json());
        return response;
    } catch (error: string | any) {
        throw new Error("Failed to fetch data", error);
    }
};