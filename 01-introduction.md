# i. Introduction

## 01-01. Ramda basics

1. Open this [REPL](https://bit.ly/2U3j4Q3).
2. Refactor `computeRawDiscount` to use[`R.multiply`](https://ramdajs.com/docs/#multiply).
3. Refactor `clampPrice` to use[`R.clamp`](https://ramdajs.com/docs/#clamp).


### Hints
* [`__`](https://ramdajs.com/docs/#\_\_)
* [`flip`](https://ramdajs.com/docs/#flip)

## 01-02. Ramda with data-last

Refactor program in [REPL](https://bit.ly/39WB4lE).

1. Firstly apply:
- [`filter`](https://ramdajs.com/docs/#filter) - to get employees under 40,
- [`map`](https://ramdajs.com/docs/#map) - to get array of salaries,
- [`reduce`](https://ramdajs.com/docs/#reduce)- to sum up the salaries,
- [`compose`](https://ramdajs.com/docs/#compose) to compose functions together

2. Use [`prop`](https://ramdajs.com/docs/#prop) to get salary instead of `=>` arrow function.
3. Use [`add`](https://ramdajs.com/docs/#add) to sum up the salaries in [`reduce`](https://ramdajs.com/docs/#reduce) function instead of `=>` arrow function.
4. Use [`gte`](https://ramdajs.com/docs/#gte) and [`prop`](https://ramdajs.com/docs/#prop) to filter out the emplyees.

```js
const employees = [
	{ id: 1, age: 41, salary: 40000 },
	{ id: 2, age: 33, salary: 33000 },
	{ id: 3, age: 53, salary: 53000 },
	{ id: 4, age: 28, salary: 28000 },
	{ id: 5, age: 26, salary: 26000 },
];

let sumSalary = 0;
for (let i = 0; i < employees.length; i++) {
	const employee = employees[i];

	if (employee.age < 40) {
		sumSalary += employee.salary;
	}
}
```
