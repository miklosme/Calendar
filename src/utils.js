import leftPad from 'left-pad';

export function isOverlap(x, y, xx, yy) {
  return Math.max(x, xx) <= Math.min(y, yy);
}

export function stringTimeToInteger(string) {
  const [hours, minutes] = string.split(':');
  return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
}

export function integerTimeToString(integer) {
  console.log('intergeg', integer);
  const hours = Math.floor(integer / 60);
  const minutes = integer % 60;
  return `${leftPad(hours, 2, 0)}:${leftPad(minutes, 2, 0)}`;
}
