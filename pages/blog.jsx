import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/navbar/sidebar";

export default function Blog() {
  return (
    <div id="App">
      <Head>
        <title>Blog - Pycha Micha</title>
      </Head>
      <Navbar color="white" />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <div className="blog flex">
          <div className="blog__image">
            <Image
              src={"/images/under-construction.svg"}
              alt="under-construction"
              layout="fill"
            />
          </div>
          <div className="blog__main-text">Strona w budowie</div>
          <div className="blog__text">Zapraszamy wkrótce</div>
        </div>
      </div>
    </div>
  );
}
