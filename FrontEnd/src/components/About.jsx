import { Link } from "react-router-dom";
import aboutImg from "../assets/about.png";
const About = () => {
  return (
    <div className="py-[40px] m-0 pt-[130px] px-6 bg-slate-100 flex flex-col md:flex-row justify-center items-center gap-8">
      <div className="w-full">
        <img src={aboutImg} alt="aboutPage-img" />
      </div>
      <div className="flex flex-col max-w-[800px] gap-6">
        <h1 className="uppercase font-semibold text-slate-900 text-[18px] md:text-[30px]">
          About us
        </h1>
        <p className="text-slate-800 text-[15px]">
          Welcome to <strong>HomeStyle Mart</strong> , your one-stop shop for
          stylish furniture and home decor. We offer a carefully curated
          selection of high-quality products that will transform your house into
          a beautiful and inviting home. At HomeStyle Mart, we understand the
          importance of creating a space that truly reflects your personal
          style. That's why we handpick each item in our collection, ensuring
          that it meets our strict standards of quality, design, and
          craftsmanship. From sleek and modern to cozy and traditional, our
          range of furniture and home accessories caters to a variety of tastes
          and preferences. Shopping with us is easy and convenient. Our
          user-friendly website allows you to browse through our products
          effortlessly, with detailed descriptions and clear images to help you
          make informed decisions. We also prioritize customer satisfaction, and
          our dedicated support team is always available to assist you with any
          questions or concerns. We believe that everyone deserves a beautifully
          furnished home without breaking the bank. That's why we offer
          competitive prices without compromising on quality. With HomeStyle Mart,
          you can shop with confidence, knowing that you're getting the best
          value for your money. Revitalize your living space with our carefully
          curated selection of furniture and home decor. Explore HomeStyle Mart today
          and discover the perfect pieces to create a home that truly reflects
          your style and personality.
        </p>
        <Link to="/">
          <button className="bg-black text-white font-bold px-6 py-4 hover:bg-transparent hover:text-black rounded hover:border border-slate-900">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
