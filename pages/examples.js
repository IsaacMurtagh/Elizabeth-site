import { Fragment } from "react";

import PageShellBasic from "@components/pageShellBasic";
import Head from "next/head";
import Headline from "@components/headline";
import Link from "next/link";
import { format } from 'date-fns';

const sections = [
  {
    name: 'Continuing Medical Education',
    examples: [
      {
        name: '9-valent Human Papillomavirus Vaccine Provides Further Protection Against Anogenital Cancers and Genital Warts',
        href: 'resources/9-valent_Human_Papillomavirus_Vaccine_Provides_Further_Protection_Against_Anogenital_Cancers_and_Genital_Warts.pdf',
        date: '2021-11-01T12:00:00.000Z',
        note: 'This article was written as a practice CME piece.'
      },
      {
        name: 'Research reports and manuscripts',
        href: 'resources/Knock-out_of_SUC2_Gene_in_Saccharomyces_Cerevisiae.pdf',
        date: '2021-11-01T12:00:00.000Z',
        note: 'This research report was written in my final year of university based on results obtained by my laboratory group.'
      },
    ]
  },
  {
    name: 'Health Writing - General Audience',
    examples: [
      {
        name: 'Holidaying in Bali, India, or Turkey? Avoid Drinking Alcohol Contaminated With Methanol',
        href: 'https://medium.com/beingwell/holidaying-in-bali-india-or-turkey-avoid-drinking-alcohol-contaminated-with-methanol-9796ddf8bf36',
        date: '2022-11-29T12:00:00.000Z',
        note: 'Some popular holiday destinations are known for producing cheap alcohol. Sometimes, cheap alcohol may be contaminated with methanol. Methanol is very toxic and should not be consumed. I discuss how to avoid methanol poisoning and what to do if you think you have consumed methanol.'
      },
      {
        name: 'How the Oral Contraceptive Pill Actually Works',
        href: 'https://medium.com/beingwell/how-the-oral-contraceptive-pill-actually-works-8176a1884264',
        date: '2022-10-24T12:00:00.000Z',
        note: 'Many young women are being prescribed the oral contraceptive pill without being taught how it works. In this article, I discuss the basics of the menstrual cycle and how ‘the pill’ affects it.'
      },
      {
        name: 'Can Conversation Analysis Distinguish Between Epileptic and Non-Epileptic Seizures?',
        href: 'https://medium.com/in-fitness-and-in-health/can-conversation-analysis-distinguish-between-epileptic-and-non-epileptic-seizures-98bbc8ce0ed1',
        date: '2022-10-21T12:00:00.000Z',
        note: 'Differential diagnosis of epileptic and non-epileptic seizures can be difficult. New research on conversation analysis could change the future of seizure diagnosis.'
      },
    ]
  },
]

export default function about() {
  return (
    <PageShellBasic>
      <Head>
        <meta name="description" content="Medical Writing " key="description" />
      </Head>
      <Headline
        title="Examples"
        subtitle="For more examples of my work, please email me at <a href='mailto:elizabeth.ruby.howe@gmail.com'>elizabeth.ruby.howe@gmail.com</a>"
      />
      <table className="w-full table-fixed text-left">
        <thead className="text-gray-800 font-medium text-lg">
          <tr>
            <th scope="col" className="w-2/5 pb-4 px-2 sm:px-6 leading-6">
              Article 🔗
            </th>
            <th scope="col" className="w-1/5 pb-4 px-2 sm:px-6 leading-6">
              Date
            </th>
            <th scope="col"className="w-2/5 pb-4 px-2 sm:px-6 leading-6">
              Note
            </th>
          </tr>
        </thead>
        <tbody className="border-t border-b border-gray-200 divide-y divide-gray-200 bg-white">
          { sections.map(section => (
            <Fragment key={section.name}>
              <tr key={section}>
                <th colSpan={4} scope="colgroup" className="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-800">
                  {section.name}
                </th>
              </tr>
              { section.examples.map(example => (
                <tr key={example.name}>
                  <th scope="row" className="py-5 px-6 font-normal text-gray-500">
                    <Link href={example.href}>
                      <a target="_blank">
                        <span className="link-text py-5 px-6 font-normal text-gray-500">{example.name}</span>
                      </a>
                    </Link>
                  </th>
                  <td className="py-5 px-6 text-sm font-normal text-gray-500">
                    <time dateTime={example.date}>{ format(new Date(example.date), "MMMM Y")}</time>
                  </td>
                  <td className="py-5 px-6 text-sm font-normal text-gray-500">
                    {example.note}
                  </td>
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </PageShellBasic>
  )
}