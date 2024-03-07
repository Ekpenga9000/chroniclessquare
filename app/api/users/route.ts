import { NextApiRequest, NextApiResponse } from "next"; 
import { getUserIdByEmail } from "@app/services/userService";


export const GET = async (request:NextApiRequest, response: NextApiResponse ) => {
    try {
        const { email } = request.query;
        const userId = await getUserIdByEmail(email as string); // Cast email to string

        return new Response(String(userId), {
            status: 200
        });
    } catch (error) {
        console.error(error);
        return new Response("Unable to fetch user ID", {
            status: 500
        }); 
    }
}