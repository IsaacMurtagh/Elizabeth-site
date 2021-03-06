import { Fragment } from "react";

import PageShellBasic from "@components/pageShellBasic";
import Head from "next/head";
import Headline from "@components/headline";
import Link from "next/link";

const educational = '📚';

const sections = [
  {
    name: 'Continuing Medical Education',
    examples: [
      {
        name: '9-valent Human Papillomavirus Vaccine Provides Further Protection Against Anogenital Cancers and Genital Warts',
        href: '9-valent_Human_Papillomavirus_Vaccine_Provides_Further_Protection_Against_Anogenital_Cancers_and_Genital_Warts.pdf',
        type: educational,
        note: 'This is a practice piece written in November 2021 on the 9-valent HPV vaccine.'
      }
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
              Article
            </th>
            <th scope="col" className="w-1/5 pb-4 px-2 sm:px-6 leading-6">
              Type
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
                  <td className="px-6 text-2xl text-gray-700">
                    { example.type }
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