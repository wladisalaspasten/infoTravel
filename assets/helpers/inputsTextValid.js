const inputValueValid = {};
const columnName = ['Type', 'In Value', 'Expect Result', 'Actual Result', 'Pass or Fail'];

inputValueValid.text = inputValue => /^\D+$/.test(inputValue);
inputValueValid.number = inputValue => /^\d+$/.test(inputValue);
inputValueValid.email = inputValue => {
	const regex = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;

	return regex.test(inputValue);
};

// Test Area
const data = [
	// Only Text
	{
		['Type']: 'Text',
		func: inputValueValid.text,
		['In Value']: 'Leonel',
		['Expect Result']: true,
	},
	{
		['Type']: 'Text',
		func: inputValueValid.text,
		['In Value']: '123Leonel',
		['Expect Result']: false,
	},
	{
		['Type']: 'Text',
		func: inputValueValid.text,
		['In Value']: '123 Leonel',
		['Expect Result']: false,
	},
	{
		['Type']: 'Text',
		func: inputValueValid.text,
		['In Value']: 'Leonel123',
		['Expect Result']: false,
	},
	{
		['Type']: 'Text',
		func: inputValueValid.text,
		['In Value']: 'Leonel 123',
		['Expect Result']: false,
	},
	{
		['Type']: 'Text',
		func: inputValueValid.text,
		['In Value']: 'L30n3l',
		['Expect Result']: false,
	},
	{
		['Type']: 'Text',
		func: inputValueValid.text,
		['In Value']: 'Leonel -',
		['Expect Result']: false,
	},
	{
		['Type']: 'Text',
		func: inputValueValid.text,
		['In Value']: 'Leonel _',
		['Expect Result']: false,
	},
	{
		['Type']: 'Text',
		func: inputValueValid.text,
		['In Value']: 'Leonel ?',
		['Expect Result']: false,
	},
	{
		['Type']: 'Text',
		func: inputValueValid.text,
		['In Value']: 'Leonel /',
		['Expect Result']: false,
	},
	// Only Numbers
	{
		['Type']: 'Number',
		func: inputValueValid.number,
		['In Value']: 123,
		['Expect Result']: true,
	},
	{
		['Type']: 'Number',
		func: inputValueValid.number,
		['In Value']: '123',
		['Expect Result']: true,
	},
	{
		['Type']: 'Number',
		func: inputValueValid.number,
		['In Value']: '123abc',
		['Expect Result']: false,
	},
	{
		['Type']: 'Number',
		func: inputValueValid.number,
		['In Value']: '123 abc',
		['Expect Result']: false,
	},
	{
		['Type']: 'Number',
		func: inputValueValid.number,
		['In Value']: '123abc',
		['Expect Result']: false,
	},
	{
		['Type']: 'Number',
		func: inputValueValid.number,
		['In Value']: '123 abc',
		['Expect Result']: false,
	},
	{
		['Type']: 'Number',
		func: inputValueValid.number,
		['In Value']: '1a2b3',
		['Expect Result']: false,
	},
	{
		['Type']: 'Number',
		func: inputValueValid.number,
		['In Value']: '123 -',
		['Expect Result']: false,
	},
	{
		['Type']: 'Number',
		func: inputValueValid.number,
		['In Value']: '123 _',
		['Expect Result']: false,
	},
	{
		['Type']: 'Number',
		func: inputValueValid.number,
		['In Value']: '123 @',
		['Expect Result']: false,
	},
	// Only Emails
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc-d@mail.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc.def@mail.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc@mail.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc_def@mail.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc.def@mail.cc',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc.def@mail-archive.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc.def@mail.org',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc.def@mail.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email@example.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'firstname.lastname@example.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email@subdomain.example.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'firstname+lastname@example.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email@123.123.123.123',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email@[123.123.123.123]',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: '"email"@example.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: '1234567890@example.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email@example-one.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: '_______@example.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email@example.name',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email@example.museum',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email@example.co.jp',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'firstname-lastname@example.com',
		['Expect Result']: true,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc-@mail.com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc..def@mail.com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: '.abc@mail.com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc#def@mail.com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc.def@mail.c',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc.def@mail#archive.com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc.def@mail',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'abc.def@mail..com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'plainaddress',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: '#@%^%#$@#$@#.com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: '@example.com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'Joe Smith <email@example.com>',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email.example.com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email@example@example.com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: '.email@example.com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email.@example.com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email..email@example.com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'あいうえお@example.com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email@example.com (Joe Smith)',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email@example',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email@111.222.333.44444',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'email@example..com',
		['Expect Result']: false,
	},
	{
		['Type']: 'Email',
		func: inputValueValid.email,
		['In Value']: 'Abc..123@example.com',
		['Expect Result']: false,
	},
];

const dataConsole = data.map(test => {
	test['Actual Result'] = test.func(test['In Value']);
	test['Pass or Fail'] = test['Expect Result'] === test['Actual Result'] ? 'Pass' : 'Fail';

	return test;
});

const { pass, fail } = dataConsole.reduce(
	(prev, test) => {
		if (test['Pass or Fail'] === 'Pass') {
			prev.pass = prev.pass + 1;
		} else {
			prev.fail = prev.fail + 1;
		}

		return prev;
	},
	{ pass: 0, fail: 0 },
);

console.table(dataConsole, columnName);
console.log(`
Pruebas Pasados: ${pass}
Pruebas Fallidas: ${fail}
Pruebas Realizadas: ${pass + fail}
`);

export default inputValueValid;
