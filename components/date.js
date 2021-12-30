import { format } from 'date-fns';

export default function date({ dateString, ...props }) {
  const date = new Date(dateString);
  return (
    <time {...props} dateTime={dateString}>{ format(date, "MMM co, yyyy")}</time>
  )
}