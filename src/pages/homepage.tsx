import FeaturedProducts from '@/components/Homepage/FeaturedProducts';
import NewArrivals from '@/components/Homepage/NewArrivals';

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

export default Homepage;
