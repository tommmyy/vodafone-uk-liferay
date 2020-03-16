# i. Introduction

## 01-01. Ramda basics
[Solution](https://bit.ly/33dfmY2)

## 01-02. Ramda with data-last
[Solution in REPL](https://bit.ly/2wamMPR).
```js
// 1
compose(
	reduce((a, b) => a + b, 0),
	map((x) => x.salary),
	filter((x) => x.age < 40)
)(employees)

// 2
compose(
	reduce((a, b) => a + b, 0),
	map(prop('salary')),
	filter((x) => x.age < 40)
)(employees)

// 3
compose(
	reduce(add, 0),
	map(prop('salary')),
	filter((x) => x.age < 40)
)(employees)

// 4
compose(
	reduce(add, 0),
	map(prop('salary')),
	filter(o(gte(40), prop('age')))
)(employees)
```
