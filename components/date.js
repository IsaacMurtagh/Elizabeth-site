import { format } from 'date-fns';

export default function date({ dateString, ...props }) {
  const date = new Date(dateString);
  return (
    <span {...props}>{ format(date, "co 'of' MMMM, yyyy")}</span>
  )
}