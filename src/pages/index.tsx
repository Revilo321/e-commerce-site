import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (session) {
    router.push('/homepage');
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Velkommen til Olivers Ecommerce Site
      </h1>
      <p className="text-lg mb-8">Log in for at fortsætte</p>
      {!session && (
        <button className="px-4 py-2 text-lg font-medium text-white bg-blue-500 rounded-xl hover:bg-blue-600">
          <Link href="/api/auth/signin?csrf=true">Log ind</Link>
        </button>
      )}
      {status === 'loading' && <p>Loading...</p>}
    </div>
  );
}
