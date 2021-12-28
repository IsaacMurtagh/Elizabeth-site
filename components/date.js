import { format } from 'date-fns';

export default function date({ dateString, ...props }) {
  const date = new Date(dateString);
  return (
    <time {...props}>{ format(date, "co 'of' MMMM, yyyy")}</time>
  )
}