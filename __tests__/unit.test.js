// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
const { isPhoneNumber } = require('../code-to-unit-test/unit-test-me.js');
const { isEmail } = require('../code-to-unit-test/unit-test-me.js');
const { isStrongPassword } = require('../code-to-unit-test/unit-test-me.js');
const { isDate } = require('../code-to-unit-test/unit-test-me.js');
const { isHexColor } = require('../code-to-unit-test/unit-test-me.js');


// TODO - Part 2

// Tests for isPhoneNumber(phoneNumber)
test('phone number test 1(true)', () => {
    expect(isPhoneNumber('559-385-6182')).toBe(true);
});
  
test('phone number test 2(true)', () => {
    expect(isPhoneNumber('626-773-0158')).toBe(true);
});

test('phone number test 3(false)', () => {
    expect(isPhoneNumber('5593856182')).toBe(false);
});

test('phone number test 4(false)', () => {
    expect(isPhoneNumber('6267-730-158')).toBe(false);
});

// Tests for isEmail(email)
test('email test 1(true)', () => {
    expect(isEmail('jiw085@ucsd.edu')).toBe(true);
});
  
test('email test 2(true)', () => {
    expect(isEmail('jingxian986@gmail.com')).toBe(true);
});

test('email test 3(false)', () => {
    expect(isEmail('jiw085.edu')).toBe(false);
});

test('email test 4(false)', () => {
    expect(isEmail('jingxian986@gmail@com')).toBe(false);
});

// Tests for isStrongPassword(password)
test('strong password test 1(true)', () => {
    expect(isStrongPassword('qazwsxedc986')).toBe(true);
});
  
test('strong password test 2(true)', () => {
    expect(isStrongPassword('q_8_a_2')).toBe(true);
});

test('strong password test 3(false)', () => {
    expect(isStrongPassword('qaz')).toBe(false);
});

test('strong password test 4(false)', () => {
    expect(isStrongPassword('1qazwsf_o')).toBe(false);
});

// Tests for isDate(date)
test('date test 1(true)', () => {
    expect(isDate('8/6/1999')).toBe(true);
});
  
test('date test 2(true)', () => {
    expect(isDate('11/12/2021')).toBe(true);
});

test('date test 3(false)', () => {
    expect(isDate('1999/8/6')).toBe(false);
});

test('date test 4(false)', () => {
    expect(isDate('11122021')).toBe(false);
});

// Tests for isHexColor(color)
test('hex color test 1(true)', () => {
    expect(isHexColor('#fff')).toBe(true);
});
  
test('hex color test 2(true)', () => {
    expect(isHexColor('#0000FF')).toBe(true);
});

test('hex color test 3(false)', () => {
    expect(isHexColor('#00')).toBe(false);
});

test('hex color test 4(false)', () => {
    expect(isHexColor('#12345aa')).toBe(false);
});
