import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillStar,
  AiFillTwitterSquare,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { BsPinterest, BsYoutube } from "react-icons/bs";

interface Product {
  name: string;
  brand: string;
  picture: {
    link: string;
    description: string;
  };
  price: number;
  score: number;
}

interface HomeProps {
  featuredProducts: Product[];
  newArivalProducts: Product[];
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  return {
    props: {
      featuredProducts: [
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/f1.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/f2.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/f3.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/f4.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/f5.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/f6.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/f7.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/f8.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
      ],
      newArivalProducts: [
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/n1.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/n2.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/n3.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/n4.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/n5.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/n6.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/n7.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
        {
          name: "Cartoon Astronaut T-Shirts",
          brand: "adidas",
          picture: {
            link: "/img/products/n8.jpg",
            description: "Cartoon Astronaut T-Shirts",
          },
          price: 78,
          score: 4,
        },
      ],
    },
  };
};

const useEventScroll = (trigerPotition: number) => {
  const [isOnTrigetPotition, setOnTrigetPosition] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > trigerPotition) setOnTrigetPosition(true);
    else setOnTrigetPosition(false);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return isOnTrigetPotition;
};

export function Header() {
  const { route } = useRouter();

  const isLeavingTop = useEventScroll(25);

  const navigations = [
    ["/", "Home"],
    ["/shop", "Shop"],
    ["/blog", "Blog"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ];

  const isActivePath = (route: string, path: string): boolean => {
    return path !== "/" ? route.startsWith(path) : route === path;
  };

  return (
    <header
      className={`fixed w-full flex justify-between items-center px-2 md:px-24 py-4 z-50 transition-colors ${
        isLeavingTop ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <img src="/img/logo.png" alt="Cara Logo" loading="eager" />
      <nav className="md:flex gap-x-8 hidden">
        {navigations.map(([path, text], id) => (
          <Link key={id} href={path}>
            <a
              className={`font-bold ${
                isActivePath(route, path)
                  ? "text-teal-700 relative after:absolute after:w-6 after:top-5 after:left-0 after:h-[0.25rem] after:bg-teal-700"
                  : ""
              }`}
            >
              {text}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="md:grid grid-cols-12 md:px-24 px-4 mb-12 text-center md:text-start flex flex-col items-center ">
      <div className="col-span-5 flex flex-col items-center md:items-start">
        <img src="/img/logo.png" className="ml-[3rem] md:ml-0" />
        <p className="font-bold text-lg mt-6 md:mt-3 mb-2">Contact</p>
        <p className="text-gray-700">
          <strong className="text-black">Address: </strong>562 Wellington Road,
          Street 32, San Fransisco
        </p>
        <p className="mt-1 text-gray-700">
          <strong className="text-black">Phone: </strong>+01 2222 365
        </p>
        <p className="mt-1 text-gray-700">
          <strong className="text-black">Hours: </strong>10:00-18:00,
          Monday-Saturday
        </p>
        <p className="mt-2 font-bold">Follow Us</p>
        <div className="flex gap-x-4 mt-2 md:mt-0.5 w-max">
          <AiFillFacebook size={24} />
          <AiFillTwitterSquare size={24} />
          <AiFillInstagram size={24} />
          <BsPinterest size={22} />
          <BsYoutube size={24} />
        </div>
      </div>
      <div className="col-span-2 text-gray-700 mt-4 md:mt-12">
        <p className="text-xl font-bold mb-3 text-black">About</p>
        <p>About Us</p>
        <p className="mt-1">Delivery Information</p>
        <p className="mt-1">Privacy Policy Terms & Conditions</p>
        <p className="mt-1">Contact Us</p>
      </div>
      <div className="col-span-2 mt-4 md:mt-12">
        <p className="text-xl font-bold mb-3">My Account</p>
        <p className="mt-1 text-gray-700">Sign In</p>
        <p className="mt-1 text-gray-700">View Cart</p>
        <p className="mt-1 text-gray-700">My Wishlist</p>
        <p className="mt-1 text-gray-700">Track My Order</p>
        <p className="mt-1 text-gray-700">Help</p>
      </div>
      <div className="col-span-3 mt-4 md:mt-10">
        <p className="text-xl font-bold">Install App</p>
        <p className="text-gray-700 mt-3">From App Store or Google Play</p>
        <div className="flex gap-x-4 mt-2">
          <Image src="/img/pay/app.jpg" width="100%" height="25%" />
          <Image src="/img/pay/play.jpg" width="100%" height="25%" />
        </div>
        <p className="text-gray-700 mt-3 mb-2">Secured Payment Gateways</p>
        <Image src="/img/pay/pay.png" width="100%" height="20%" />
      </div>
    </footer>
  );
}

function FeatureList() {
  const features: {
    picture: { link: string; description: string };
    text: string;
    className: string;
  }[] = [
    {
      picture: {
        link: "/img/features/f1.png",
        description: "",
      },
      text: "Free Shipping",
      className: "text-blue-400 bg-blue-100",
    },
    {
      picture: {
        link: "/img/features/f2.png",
        description: "",
      },
      text: "Free Shipping",
      className: "text-red-400 bg-red-100",
    },
    {
      picture: {
        link: "/img/features/f3.png",
        description: "",
      },
      text: "Free Shipping",
      className: "text-green-600 bg-green-100",
    },
    {
      picture: {
        link: "/img/features/f4.png",
        description: "",
      },
      text: "Free Shipping",
      className: "text-blue-400 bg-blue-100",
    },
    {
      picture: {
        link: "/img/features/f5.png",
        description: "",
      },
      text: "Free Shipping",
      className: "text-purple-500 bg-purple-200",
    },
    {
      picture: {
        link: "/img/features/f6.png",
        description: "",
      },
      text: "24/7 Service",
      className: "text-amber-800/50 bg-amber-100",
    },
  ];
  return (
    <ul className="flex flex-wrap justify-center md:justify-between mx-4 text-center gap-4 md:mx-24">
      {features.map(({ picture, text, className }, id) => (
        <li
          key={id}
          className="w-[8rem] md:w-[10rem] border border-gray-200 rounded-md p-3"
        >
          <Image
            width="100%"
            height="70%"
            src={picture.link}
            alt={picture.description}
            layout="responsive"
          />
          <p className={`font-semibold mt-2 rouded ${className}`}>{text}</p>
        </li>
      ))}
    </ul>
  );
}

function ProductList({ products }: { products: Product[] }) {
  return (
    <ul className="flex flex-wrap justify-center md:justify-between 3xl:justify-start gap-5 md:gap-7 md:mx-24 mt-8">
      {products.map(({ name, brand, picture, score, price }, id) => (
        <li
          key={id}
          className="min-w-[22rem] md:min-w-[17rem] 2xl:min-w-[20rem] border border-gray-200 p-2 rounded-md"
        >
          <Image
            className="w-full h-auto rounded-md"
            width="100%"
            height="100%"
            src={picture.link}
            alt={picture.description}
            layout="responsive"
          />
          <p className="text-gray-600 mt-1 text-sm">{brand}</p>
          <p className="font-bold">{name}</p>
          <div className="flex">
            {Array(5)
              .fill(score)
              .map((score, id) =>
                score > id ? (
                  <AiFillStar key={id} className="text-yellow-500" />
                ) : (
                  <AiOutlineStar key={id} className="text-yellow-500" />
                )
              )}
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xl text-teal-800 font-bold">{`$${price}`}</p>
            <button className="rounded-full bg-teal-100 p-1">
              <AiOutlineShoppingCart className="text-teal-700" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Home({
  featuredProducts,
  newArivalProducts,
}: HomeProps) {
  return (
    <>
      <Header />
      <main>
        <section className="flex flex-col justify-center items-start bg-[url('/img/hero4.png')] bg-[top_25%_right_25%] md:bg-[top_10%_right_0] bg-cover h-[32rem] sm:h-[42rem]">
          <p className="mx-4 mt-24 md:mx-24 text-xl md:text-4xl font-bold">
            Trade in offer
          </p>
          <p className="mx-4 mt-1 md:mx-24 text-4xl md:text-6xl font-bold">
            Super value deals
          </p>
          <p className="mx-4 text-4xl md:mx-24 text-teal-700 md:text-6xl font-bold">
            On all products
          </p>
          <p className="mx-4 mt-2 md:mx-24 text-gray-700">
            Save more with coupons & up to{" "}
            <span className="text-green-700 font-bold">70% off!</span>
          </p>
          <button className="mx-2 mt-4 md:mx-24 bg-[url('/img/button.png')] bg-cover px-14 py-2 font-semibold text-teal-700">
            Shop Now
          </button>
        </section>
        <section className="mt-12">
          <FeatureList />
        </section>
        <section className="mt-12 mx-4 md:mx-0">
          <p className="text-3xl font-bold text-center md:text-4xl">
            Featured Products
          </p>
          <p className="mt-1 text-gray-700 text-center md:text-lg">
            Summer Collection New Modern Design
          </p>
          <ProductList products={featuredProducts} />
        </section>
        <section className="bg-[url('/img/banner/b2.jpg')] bg-cover py-12 mt-12 text-center">
          <p className="text-white font-bold text-lg">Repair Services</p>
          <p className="mt-1 text-white font-bold text-2xl">
            Up to <strong className="text-red-500">70% Off</strong> All t-Shirts
          </p>
          <button className="mt-4 bg-white px-4 py-2 font-bold rounded-md">
            Explore More
          </button>
        </section>
        <section className="mt-12 mx-4 md:mx-0">
          <p className="text-3xl font-bold text-center md:text-4xl">
            New Arrival
          </p>
          <p className="mt-1 text-gray-700 text-center md:text-lg">
            Summer Collection New Modern Design
          </p>
          <ProductList products={newArivalProducts} />
        </section>
        <section className="md:grid grid-col-6 grid-row-2 gap-4 md:px-24 mt-12">
          <div className="bg-[url('/img/banner/b17.jpg')] bg-cover col-span-3 row-[1/1] h-[18rem] flex flex-col justify-center items-start pl-12">
            <p className="text-xl text-white">crazy deals</p>
            <p className="md:text-4xl font-bold text-white">buy 1 get 1 free</p>
            <p className="font-bold text-white">
              The best classic dress on sale at cara
            </p>
            <button className="mt-4 font-bold py-2 px-4 border-[3px] border-white text-white text-lg">
              Learn More
            </button>
          </div>
          <div className="bg-[url('/img/banner/b10.jpg')] bg-cover col-span-3 row-[1/1] h-[18rem] flex flex-col justify-center items-start pl-8">
            <p className="text-xl text-white">spring/summer</p>
            <p className="text-4xl font-bold text-white">upcoming season</p>
            <p className="font-bold text-white">
              The best classic dress on sale at cara
            </p>
            <button className="mt-4 font-bold py-2 px-4 border-[3px] border-white text-white">
              Collection
            </button>
          </div>
          <div className="bg-[url('/img/banner/b7.jpg')] bg-cover col-span-2 row-[2/2] bg-yellow-500 h-[14rem] flex flex-col justify-center items-start pl-8">
            <p className="text-3xl text-white font-bold">SEASONAL SALE</p>
            <p className="text-xl text-red-500 font-bold">Winter Collection</p>
          </div>
          <div className="bg-[url('/img/banner/b4.jpg')] bg-cover col-span-2 row-[2/2] bg-green-500 h-[14rem] flex flex-col justify-center items-start pl-8">
            <p className="text-3xl text-white font-bold">SEASONAL SALE</p>
            <p className="text-xl text-red-500 font-bold">Winter Collection</p>
          </div>
          <div className="bg-[url('/img/banner/b18.jpg')] bg-cover col-span-2 row-[2/2] bg-purple-500 h-[14rem] flex flex-col justify-center items-start pl-8">
            <p className="text-3xl text-white font-bold">SEASONAL SALE</p>
            <p className="text-xl text-red-500 font-bold">Winter Collection</p>
          </div>
        </section>
        <section className="my-12 py-8 flex flex-col items-center text-center md:flex-row justify-between bg-[hsl(215,89%,14%)] bg-[url('/img/banner/b14.png')] md:px-24 h-[16rem]">
          <div className="md:text-start">
            <p className="text-white text-2xl font-bold">
              Subscribe For Newsletters
            </p>
            <p className="text-white mt-1">
              Get email updates about our latest shop and{" "}
              <strong className="text-yellow-500">special offers.</strong>
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex mt-4"
          >
            <input
              className="px-4 rounded-l-md md:w-[24rem]"
              type="email"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-r-md font-bold bg-teal-700 text-white"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
