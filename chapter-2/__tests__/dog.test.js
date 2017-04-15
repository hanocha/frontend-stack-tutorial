import Dog from './dog'

describe('Dog.bark', () => {
  const testDog = new Dog('test')
  expect(testDog.bark()).toBe('test: Wah wah!')
})
