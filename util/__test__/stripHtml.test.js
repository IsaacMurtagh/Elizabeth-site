import stripHtml from '../stripHtml';

describe('stripHtml', () => {
  it('strips string which has a single div', () => {
    const html = '<div>hello</div>'
    const expected = 'hello'
    expect(stripHtml(html)).toEqual(expected);
  })
  
  it('strips string which with nested elements', () => {
    const html = '<div><h1>hello </h1><p>how do you do</p></div>'
    const expected = 'hello how do you do'
    expect(stripHtml(html)).toEqual(expected);
  })

  it('is given a string without any elements', () => {
    const html = 'hello'
    const expected = 'hello'
    expect(stripHtml(html)).toEqual(expected);
  })
})