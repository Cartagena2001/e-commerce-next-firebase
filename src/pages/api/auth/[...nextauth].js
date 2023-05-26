import NextAuth from "next-auth/next";
import GoogeProvider from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.SECRET,
    providers: [
        GoogeProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
}
export default NextAuth(authOptions);