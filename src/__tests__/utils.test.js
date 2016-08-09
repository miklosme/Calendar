import { stringTimeToInteger, integerTimeToString } from '../utils';

describe('Utils', () => {
  describe('stringTimeToInteger', () => {
    it('should convert string format to number', () => {
      expect(stringTimeToInteger('03:12')).toBe(192);
      expect(stringTimeToInteger('00:00')).toBe(0);
      expect(stringTimeToInteger('00:12')).toBe(12);
      expect(stringTimeToInteger('24:59')).toBe(1499);
    });
  });
  describe('integerTimeToString', () => {
    it('should convert number format to string', () => {
      expect(integerTimeToString(0)).toBe('00:00');
      expect(integerTimeToString(12)).toBe('00:12');
      expect(integerTimeToString(192)).toBe('03:12');
      expect(integerTimeToString(1499)).toBe('24:59');
    });
  });
});
