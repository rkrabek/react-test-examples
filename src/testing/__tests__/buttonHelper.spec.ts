import { getButtonText } from '../buttonHelper';

describe('The buttonHelper', () => {
  it('returns sample button text', () => {
    expect(getButtonText()).toBe('this is a button');
  })
})