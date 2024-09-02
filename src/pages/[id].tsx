import { GetStaticPaths, GetStaticProps } from "next";
import { loadPages } from "../api/load-pages";
import Home, { HomeProps } from "../templates/App";
import { Loading } from "../templates/Loading";
import { useRouter } from "next/router";
import P from "prop-types";

export default function Page({ data }: HomeProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return <Home data={data} />;
}

Page.propTypes = {
  data: P.array,
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = (await loadPages()).map((page) => {
  //   return {
  //     params: {
  //       id: `${page.id}`,
  //     },
  //   };
  // });

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  let data = null;

  try {
    data = await loadPages(context.params.id as string);
  } catch (error) {
    console.log(error);
    data = null;
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
    revalidate: 600,
  };
};
