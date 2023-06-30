import FeaturedProducts from '@/components/Homepage/FeaturedProducts';
import NewArrivals from '@/components/Homepage/NewArrivals';
import withAuth from '@/hooks/withAuth';

const Homepage = () => {
  return (
    <div>
      <div className="pt-14">
        <FeaturedProducts />
      </div>
      <div className="pt-14">
        <NewArrivals />
      </div>
    </div>
  );
};

export default withAuth(Homepage);
