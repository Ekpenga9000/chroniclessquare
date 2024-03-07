import { PrismaClient } from '@prisma/client';
import { User } from '@app/interfaces/interfaces';

const prisma = new PrismaClient();


export const getUserIdByEmail = async (email: string): Promise<String | null> => {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (!user) {
        throw new Error(`No user found for email: ${email}`);
    }

    return user.id;
}