export default function stripHtml(s) {
  return s.replace(/<[^>]*>?/gm, '');
}