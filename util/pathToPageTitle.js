
function capitalize(s) {
  return s.replace(/\b\w/g, c => c.toUpperCase());
};

function kebabToCapitalize(s) {
  const sentence = s.replace(/-/g, ' ');
  return capitalize(sentence);
}
export default function pathToPageTitle({ path, siteName }) {
  const kebabCase = path.split('/').slice(-1)[0];
  if (!kebabCase) {
    return `${siteName} — Medical Writing`;
  }
  return `${siteName} — ${kebabToCapitalize(kebabCase)}`;
}