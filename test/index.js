import assert from 'assert';
import {Instant} from '../lib';

describe('hallskaven', function () {
  const startDate = new Date(1979, 1, 10);
  const endDate = new Date();
  it('should preserve instant start date', function () {
    assert(new Instant(startDate, endDate).start.getTime() === startDate.getTime(), 'instant doesn\'t preserve start date');
  });
  it('should preserve instant start date when null', function () {
    assert(new Instant(null, endDate).start === null, 'instant doesn\'t preserve start date when null');
  });
  it('should preserve instant end date', function () {
    assert(new Instant(startDate, endDate).end.getTime() === endDate.getTime(), 'instant doesn\'t preserve end date');
  });
  it('should preserve instant end date when null', function () {
    assert(new Instant(startDate, null).end === null, 'instant doesn\'t preserve end date when null');
  });
});
