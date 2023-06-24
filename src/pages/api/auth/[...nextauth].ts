import NextAuth, { NextAuthOptions } from 'next-auth';
import Google from 'next-auth/providers/google';
import SequelizeAdapter from '@auth/sequelize-adapter';
import sequelize from '../../../../db/database';

const adapter = SequelizeAdapter(sequelize) as any;

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  adapter: adapter,
};

export default NextAuth(authOptions);
