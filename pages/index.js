import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import variables from "@config/variables";

export default function aboutMe() {
  return (
    <>
      <Head>
        <meta name="description" content="New Zealand based medical Writer Elizabeth Howe — SEO, Promotional, Educational, and Health Communication" key="description" />
      </Head>
      <div className="relative flex flex-grow">
        <Image
          priority
          src="/rm245-bb-62.jpg"
          alt="Elizabeth Howe"
          layout="fill"
        />
        <div className="absolute inset-0 flex justify-center items-center flex-col">
          <h1 className="text-center mb-20 text-rose-600 font-bold text-4xl md:text-6xl">
            LiloWriting — Medical & Science Writing
          </h1>
          <Link href={variables.contactEmail}>
            <a className="btn-primary">
              Contact Me
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}