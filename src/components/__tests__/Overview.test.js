import React from 'react';
import renderer from 'react-test-renderer';
import Overview from '../Overview';

jest.mock('../../../style/values.scss', () => ({
  timeNodeHeight: '30px',
}));

describe('components/Overview', () => {
  it('renders correctly', () => {
    const exampleAppointments = require('./example_appointments.json');
    const tree = renderer.create(
      <Overview
        appointments={exampleAppointments}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
