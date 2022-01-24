import pathToPageTitle from '../pathToPageTitle';

describe('pathToPageTitle', () => {
  it('is the home path', () => {
    const path = '/';
    const expected = 'Isaac Murtagh — Web Dev';
    expect(pathToPageTitle({ path, siteName: 'Isaac Murtagh'})).toEqual(expected);
  });

  it('is a single layer', () => {
    const path = '/services';
    const expected = 'Isaac Murtagh — Services';
    expect(pathToPageTitle({ path, siteName: 'Isaac Murtagh'})).toEqual(expected);
  });

  it('is a single layer with kebab case', () => {
    const path = '/about-me';
    const expected = 'Isaac Murtagh — About Me';
    expect(pathToPageTitle({ path, siteName: 'Isaac Murtagh'})).toEqual(expected);
  });

  it('is multi layered', () => {
    const path = '/blog/what-is-seo';
    const expected = 'Isaac Murtagh — What Is Seo';
    expect(pathToPageTitle({ path, siteName: 'Isaac Murtagh'})).toEqual(expected);
  });
});