import reducer from '../appointments';
import {ActionTypes as AT} from '../../constants';

describe('reducers/appointments', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: AT.ADD_APPOINTMENT,
        id: 1470769362755,
        title: 'iuf',
        startTime: 420,
        endTime: 450,
        description: 'sdf'
      })
    ).toEqual([
      {
        id: 1470769362755,
        title: 'iuf',
        startTime: 420,
        endTime: 450,
        description: 'sdf'
      }
    ]);

    expect(
      reducer([
        {
          id: 1470769362755,
          title: 'iuf',
          startTime: 420,
          endTime: 450,
          description: 'sdf'
        }
      ], {
        type: AT.REMOVE_APPOINTMENT,
        id: 1470769362755,
      }
    )).toEqual([]);

    expect(
      reducer([
        { foo: '1', bar: '2' }
      ], {
        type: AT.DELETE_ALL_APPOINTMENTS,
      }
    )).toEqual([]);
  });
});
