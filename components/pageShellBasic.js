import DotMatrix from "@assets/dotMatrix.svg"
export default function pageShellBasic({ children, plain, className }) {
  return (
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8 flex-grow">
      { !plain && (
        <>
          <DotMatrix className="hidden md:block absolute top-16 right-24 text-gray-100"/>
          <DotMatrix className="hidden md:block absolute bottom-1/3 left-24 text-gray-100"/>
          <DotMatrix className="hidden md:block absolute bottom-16 right-24 text-gray-100"/>
        </>
      )}
      <div className={`relative max-w-7xl mx-auto ${className}`.trim()}>
        {children}
      </div>
    </div>
  )
}