/* eslint-disable @typescript-eslint/no-explicit-any */
const baseUrl = "https://ipinfo.io/json";
const apiKey = "052eb7cba6a843";

export const getIpData = async (ip?: string) => {
    const url = new URL(baseUrl);
    if (ip) url.searchParams.append("query", ip);
    url.searchParams.append("token", apiKey);

    // let url = `${baseUrl}?apiKey=${apiKey}&ipAddress=${ip}`;
    // if (ip === undefined) {
    //     url = `${baseUrl}?apiKey=${apiKey}`;
    // }

    try {
        const response = await fetch(url).then(res => res.clone().json());
        return response;
    } catch (error: string | any) {
        throw new Error("Failed to fetch data", error);
    }
};