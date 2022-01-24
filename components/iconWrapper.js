export default function iconWrapper({ children, className }) {
  return (
    <div className={`flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-yellow-400 text-white ${className || ''}.trim()`}>
      {children}
    </div>
  )
}