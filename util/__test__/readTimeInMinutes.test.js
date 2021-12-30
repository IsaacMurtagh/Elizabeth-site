import readTimeInMinutes from '../readTimeInMinutes';

describe('readTimeInMinutes', () => {
  test('small amount of text', () => {
    const words = 'This is a small amount of text';
    const expectedReadTime = 1;
    expect(readTimeInMinutes(words)).toEqual(expectedReadTime);
  });

  test('large amount of text', () => {
    const words = 'Word '.repeat(500);
    const expectedReadTime = 3;
    expect(readTimeInMinutes(words)).toEqual(expectedReadTime);
  });
})