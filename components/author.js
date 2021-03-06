import Image from "next/image";
import Link from "next/link";

export default function author({ author }) {
  return (
    <Link href={author.linkedIn}>
      <a className="flex space-x-4 items-center cursor-pointer">
        <div className="flex-shrink-0 flex">
          <span className="sr-only">{author.name}</span>
          <Image
            src={author.avatar.url}
            alt={author.avatar.alternativeText}
            height={48}
            width={48}
            className="rounded-full"
          />
        </div>
        <div className="text-xs font-medium text-slate-500">
          <div className="italic">Written by</div>
          <div className="link-text">{ author.name }</div>
        </div>
      </a>
    </Link>
  )
}