import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.NEXTAUTH_SECRET  ?? ""
        })
    ]
})

export { handler as GET, handler as POST}
