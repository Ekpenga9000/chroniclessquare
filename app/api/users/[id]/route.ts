// get all users from postgres database using prisma
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express'; // Add this import statement
const prisma = new PrismaClient();

export default async function handler(req: Request, res: Response) { // Specify the type of 'res' parameter
    if (req.method === 'GET') {
        const users = await prisma.user.findMany();
        res.json(users);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
