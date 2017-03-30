import Dog from './dog'

test('Dog.bark', () => {
	const testDog = new Dog('test')
	expect(testDog.bark()).toBe('wah wah, I am test')
})
