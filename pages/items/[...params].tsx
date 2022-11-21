import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div className="container">
      <Seo title={title} />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  // console.log(ctx);
  const movieDetail = await (
    await fetch.get(`http://localhost:3005/api/movies/${params[1]}`)
  ).data;
  return {
    props: {
      movieDetail,
    },
  };
}
