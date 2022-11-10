import operate from '../operate';

test('Test operate function', () => {
  expect(operate(2, 5, '+')).toBe('7');
  expect(operate(29, 1, '-')).toBe('28');
  expect(operate(6, 2, '÷')).toBe('3');
  expect(operate(10, 10, 'x')).toBe('100');
});

it('Test division function', () => {
  expect(operate('30', '2', '÷')).toBe('15');
  expect(operate(12, 0, '÷')).toBe('Can\'t divide by 0.');
});
