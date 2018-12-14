import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

Enzyme.configure({adapter: new EnzymeAdapter()})

const defaultProps = {
    guessedWords: [{guessedWord: 'train', letterMatchCount: 3}]
  }

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props}
  return shallow(<GuessedWords {...setupProps}/>)
}

test('does not throw warning when passed expected props', () => {
  checkProps(GuessedWords, defaultProps)
})

describe('if there are words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  })
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })
  test('renders instructions to guess word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions')
    expect(instructions.text().length).not.toBe(1)
  })
})

describe('if there are no words guessed', () => {

})