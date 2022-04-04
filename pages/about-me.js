import PageShellBasic from "@components/pageShellBasic";
import Head from "next/head";
import Headline from "@components/headline";
import Image from "next/image";
import Link from "next/link";
import variables from "@config/variables";

const aboutMeParagraphs = [
  'I am a science and medical writer based in the beautiful Wellington, New Zealand. I studied towards a Bachelor of Science in Biochemistry from the University of Canterbury before transferring in my final year to the Victoria University of Wellington to graduate with a Bachelor of Biomedical Science, majoring in Molecular Pathology.',
  'I write about biology, biochemistry, general medicine, health, pharmaceuticals, science policy and mental health. My passion lies in the general medicine and mental health sectors.',
  'When I’m not working you can find me gardening, reading, at the gym or behind a sewing machine.',
]

const aboutMeLinks = [
  {
    name: 'LinkedIn',
    href: variables.linkedIn,
  },
  {
    name: 'CV',
    href: 'elizabeth-howe-cv.pdf',
  },
  {
    name: 'elizabeth.ruby.howe@gmail.com',
    href: 'mailto:elizabeth.ruby.howe@gmail.com',
  },
]

export default function aboutMe() {
  return (
    <PageShellBasic>
      <Head>
        <meta name="description" content="My name's Elizabeth Howe, I am a medical writer located in New Zealand — get in touch about my writing services." key="description" />
      </Head>
      <Headline
        title="About me"
        subtitle="Feel free to contact me if you're interested in my writing services."
      />
      <div className="space-y-12 md:space-y-24">
        <div className="md:flex flex-row-reverse bg-white/40">
          <div className="flex flex-col md:w-3/5 md:ml-8 mb-8 md:mb-0 space-y-4 p-4">
            <h2 className="text-3xl font-semibold">{'Hi, I\'m Elizabeth'}</h2>
            { aboutMeParagraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-500 font-light">{paragraph}</p>
            ))}
            <ul className="list-disc list-inside space-y-4 p-4">
              { aboutMeLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <a target="_blank">
                      <span className="link-text text-lg underline text-gray-600">{link.name}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative max-w-lg aspect-square mx-auto flex flex-1 shadow-lg">
            <Image
              priority
              src="/elizabeth_howe.png"
              alt="Elizabeth Howe"
              layout="fill"
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </PageShellBasic>
  )
}