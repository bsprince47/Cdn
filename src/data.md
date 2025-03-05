###### Question 1
What will be the output of the following JavaScript code?
```js
console.log(typeof null);
```

- [ ] "null"  
- [X] "object"
- [ ] "undefined"
- [ ] "object"

###### details
In JavaScript, typeof null returns "object" due to a historical bug in JavaScript. Although null represents the absence of an object, typeof incorrectly classifies it as "object".
