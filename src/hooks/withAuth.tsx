import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const WrapperComponent = (props: any) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === 'loading') {
      return <div>Loading...</div>;
    }

    if (!session) {
      router.push('/');
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return WrapperComponent;
};
export default withAuth;
