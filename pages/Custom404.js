// pages/404.js

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-md shadow-xl text-center">
          {/* Logo Image - ensure you have the logo in the public folder */}
          <div className="mb-4">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png" // Path to your logo image
              alt="Logo"
              width={300} // Adjust according to your image's aspect ratio
              height={100} // Adjust according to your image's aspect ratio
              className="mx-auto"
            />
          </div>
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <h2 className="text-xl font-semibold text-gray-700 mt-2">
            Sorry, this website isn't available at the moment.
          </h2>
          <p className="mt-4 text-gray-600">
            Please renew your Vercel account to continue hosting.
          </p>
          <Link
            className="mt-6 inline-block text-white bg-gray-700 px-6 py-2 rounded hover:bg-black transition-colors"
            href="https://vercel.com/"
          >
            Visit Vercel
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;
