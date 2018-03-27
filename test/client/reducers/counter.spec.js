import expect from 'expect';
import reducer, { add } from '../../../src/client/reducers/counter';

const initialState = { counter: 0 };
const TYPE_ADD = 'counter_add';
const TYPE_UNDEFINED = 'undefined_type';

describe('Reducers - counter.js', () => {
  describe('default', () => {
    it('should return the initial state', () =>
      expect(reducer(undefined, {})).toEqual(initialState));

    describe('should handle the action of TYPE_ADD', () => {
      const tests = [
        { state: { counter: 0 }, expected: { counter: 1 } },
        { state: { counter: 3 }, expected: { counter: 4 } },
        { state: { counter: 99 }, expected: { counter: 100 } }
      ];
      tests.forEach((test, index) => {
        it(`case ${index + 1}`, () =>
          expect(reducer(test.state, { type: TYPE_ADD })).toEqual(test.expected));
      });
    });

    describe('should handle the undefined action', () => {
      const tests = [
        { state: { counter: 0 }, expected: { counter: 0 } },
        { state: { counter: 3 }, expected: { counter: 3 } },
        { state: { counter: 99 }, expected: { counter: 99 } }
      ];
      tests.forEach((test, index) => {
        it(`case ${index + 1}`, () =>
          expect(reducer(test.state, { type: TYPE_UNDEFINED })).toEqual(test.expected));
      });
    });
  });

  describe('add()', () => {
    it('should return type of TYPE_ADD from add()', () =>
      expect(add()).toEqual({ type: TYPE_ADD }));
  });
});
