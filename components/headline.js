export default function ({ title, subtitle, caption }) {
  return (
    <div className="flex flex-col text-center max-w-4xl mx-auto mb-8 md:mb-16">
    { caption && <span className="uppercase text-yellow-500 mb-1">{ caption }</span> }
    { title && <h1 className="text-4xl font-bold mb-4">{ title }</h1> }
    { subtitle && <h2 className="text-gray-500 text-xl font-extralight max-w-2xl mx-auto">{ subtitle }</h2> }
  </div>
  )
}