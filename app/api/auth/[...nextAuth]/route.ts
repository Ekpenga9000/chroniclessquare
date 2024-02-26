import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import { authOptions } from "@app/utils/auth"; 

const handler = NextAuth(authOptions);