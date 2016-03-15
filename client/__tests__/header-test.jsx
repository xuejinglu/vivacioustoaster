// header-test.jsx
import React from 'react/addons';
import expect from 'expect';
import Header from '../app/header.js'

const TestUtils = React.addons.TestUtils;

describe('Header', function () {
  it('renders an h1', function() {
    var header = TestUtils.renderIntoDocument(<Header />);

    var h1 = TestUtils.findRenderedDOMComponentWithTag(header, 'h1');

    expect(h1.getDOMNode().textContent).toEqual('GUYS NAME THIS');
  })
});