import {JWT_ACCESS_SECRET} from "$env/static/private";
import db from "./db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


function createJWT(user) {
    return  jwt.sign({id: user.id, email: user.email}, JWT_ACCESS_SECRET, {
        expiresIn: '1d'
    });
}

export async function createUser(email, username, password) {
    try {
        const existingUser = await db.user.findFirst({
            where: {
                OR: [
                    { email },
                    { username },
                ],
            },
        });

        if (existingUser) {
            if (existingUser.email === email) {
                return { error: 'mail already used' };
            }
            return { error: 'username already used' };
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await db.user.create({
            data: { email, username, password: hashedPassword },
        });

        const token = createJWT(newUser);
        return { token };
    } catch (error) {
        return error;
    }
}

export async function loginUser(username, password) {
    try {
        const user = await db.user.findUnique({
            where: {
                username
            }
        });

        if (!user) {
            return {error: 'User not found'};
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            return {error: 'Invalid password'};
        }

        const token = createJWT(user);

        return {token};
    } catch (error) {
        console.log('error caught', error);
        return error;
    }
}
