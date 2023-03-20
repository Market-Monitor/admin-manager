import HomePage from "@/modules/home/page";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
      },
    };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
};

export default HomePage;
