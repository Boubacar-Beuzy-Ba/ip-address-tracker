/* eslint-disable @typescript-eslint/no-explicit-any */
const baseUrl = "http://ip-api.com/json";
// const apiKey = "at_sL65Lqrexp5bN8lRj47WrZxIbvhkt";

export const getIpData = async (ip?: string) => {
    const url = new URL(baseUrl);
    if (ip) url.searchParams.append("query", ip);

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