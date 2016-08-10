import React from 'react';
import renderer from 'react-test-renderer';
import MockDate from 'mockdate';
import Overview from '../Overview';

jest.mock('../../../style/values.scss', () => ({
  timeNodeHeight: '30px',
}));

describe('components/Overview', () => {
  beforeEach(() => {
    MockDate.set('8/9/2016');
  });

  afterEach(() => {
    MockDate.reset();
  });

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
