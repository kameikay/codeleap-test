import Head from "next/head";
import { Header } from "../components/Header";
import { Signup } from "../components/Signup";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codeleap Network - Signup</title>
      </Head>
      
      <Header />
      <Signup />
    </>
  )
}