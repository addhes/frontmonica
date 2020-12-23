import Head from "next/head";

import axios from "src/config/axios";
import Circle from "public/images/circle_accent-1.svg";
import Header from "src/parts/Headers";
import Hero from "src/parts/Hero";
import Clients from "src/parts/Clients";
import VideoUndangan from "src/parts/VideoUndangan";
import Cources from "src/parts/ListCourses/Courses";
import Footer from "src/parts/Footer"

function Home({ data }) {
  
  return (
    <>
      <Head>
        <title>MICRO</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <section className="header-clipping pt-5 md:pt-10 min-h-screen md:min-h-0 px-28">
          <div className="sunshine max-w-full"></div>
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="container mx-auto">
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>
        <section className="container px-10 mx-auto pt-20 md:pt-36">
          <Clients></Clients>
        </section>
        <section className="container px-10 mx-auto pt-28">
          <VideoUndangan></VideoUndangan>
        </section>
        <section  className="container px-10 mx-auto pt-20 md:pt-24">
          <Cources data={data}></Cources>
        </section>
        <section className="mt-24 bg-indigo-1000 py-12">
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`);
    return { data: data.data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
