import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '@/db';

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST!,
        port: parseInt(process.env.EMAIL_SERVER_PORT!),
        auth: {
          user: process.env.EMAIL_SERVER_USER!,
          pass: process.env.EMAIL_SERVER_PASSWORD!,
        },
      },
      from: process.env.EMAIL_FROM!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async redirect(params: { url: string; baseUrl: string }) {
      return params.baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
