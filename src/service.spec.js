import angular from 'angular';
import 'angular-mocks';
import './service.js';

describe('Math service - addTwoNumbers', function() {

  beforeEach(angular.mock.module('mathmodule'));

  let _mathservice;

  beforeEach(inject((mathservice) => {
    _mathservice = mathservice;
  }));

  it('1 + 1 should equal 2', function() {
    const actual = _mathservice.addTwoNumbers(1, 1);
    expect(actual).toEqual(2);
  });

  it('10 + 5 should equal 15', function() {
    const actual = _mathservice.addTwoNumbers(10, 5);
    expect(actual).toEqual(15);
  });

  it('50 + 80 should equal 130', function() {
    var actual = _mathservice.addTwoNumbers(50, 80);
    expect(actual).toEqual(130);
  });

});
