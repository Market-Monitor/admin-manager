import { getServerSideProps } from "@/pages";
import { InferGetServerSidePropsType } from "next";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

const authStyles: Record<string, { className: string }> = {
  github: {
    className: "bg-gray-500 hover:bg-gray-600",
  },
  google: {
    className: "bg-emerald-500 hover:bg-emerald-600",
  },
  facebook: {
    className: "bg-blue-500 hover:bg-blue-600",
  },
};

const HomePage = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="py-32 min-h-screen">
      <Head>
        <title>Admin Manager - Market Monitor</title>
      </Head>

      <div className="text-center">
        <h1 className="text-4xl font-black text-gray-800">
          Market Monitor |{" "}
          <span className="text-emerald-500">Admin Manager</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Only authorized personnel are allowed
        </p>

        <div className="mt-8 w-full mx-auto xl:w-1/3 flex flex-col">
          {Object.values(providers).map((provider) => (
            <button
              key={provider.name}
              className={`flex justify-center items-center py-3 uppercase font-medium duration-300 my-2 rounded-lg text-white ${
                authStyles[provider.id]?.className
              }`}
              onClick={() => signIn(provider.id)}
            >
              <Image
                src={`https://cdn.simpleicons.org/${provider.id}/white`}
                alt=""
                width={24}
                height={24}
              />
              <span className="ml-2">Sign in with {provider.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
