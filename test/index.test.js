import { expect } from 'chai'

import subject from '../index'

describe('kata_name', () => {
  it('example', () => {
    const example = subject()
    const expected = 2

    expect(example).to.eql(expected)
  })
})
