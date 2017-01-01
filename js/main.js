/**
* Week 4: Reading the DOM
*
* author: {name}
* email: {email}
*
* Open dev tools on your browser
*   - Make sure your console is visible while doing these tasks
*   - It's a good idea to always have the console visible while testing JS
*/

/*
* Task 1: Get an element by ID
* https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById 
*/
console.log('::Task 1::');
var target = document.getElementById('pageTitle');

alert(target.nodeName);
console.log(target);


/*
* Task 2: Get elements by tag name
* https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
*
* for loops
* https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for
*/
console.log('::Task 2::');

var listItems = document.getElementsByTagName('li');

console.log('HTMLCollection:');
console.log(listItems);

console.log('List items:');
for (var i = 0, ii = listItems.length; i < ii; i++)
{
	alert(listItems[i].nodeName);
	console.log(listItems[i].nodeName);
}

/*
* Task 3: Finding children
* 
* Array.prototype.forEach
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
**/
console.log('::Task 3::');

var lists = document.getElementsByTagName('ul');
console.log('HTMLCollection of all ul\'s:');
console.log(lists);

// get only the second list (ul).  
// the first ul is in index 0, and the second ul is in index 1 of the array
var secondList = lists[1];
console.log('Our second list:');
console.log(secondList);

// get a collection of all the <li> elements inside the second <ul>
var secondListItems = secondList.getElementsByTagName('li');
console.log('The li\'s returned within our second list:');
console.log(secondListItems);

console.log('Each li as we loop through:');
for (var i = 0, ii = secondListItems.length; i < ii; i++)
{
	alert(secondListItems[i].nodeName);
	console.log(secondListItems[i]);
}
// the for loop is going through all the <li> elements in the second <ul> and displaying the element’s name in a dialog box on the screen.

/*
* Task 4: Elements by class value
* https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
**/
console.log('::Task 4::');

var classItems = document.getElementsByClassName('find_me');

console.log('HTMLCollection:');
console.log(classItems);

console.log('Our items with the "find_me" class:');
for (var i = 0, ii = classItems.length; i < ii; i++)
{
	alert(classItems[i].nodeName);
	console.log(classItems[i].nodeName);
}

/*
* Task 5: Query selector
* https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
* 
* querySelectorAll
* https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
*
* Here's an example of querySelector and querySelectorAll which combine all of the above
*/

console.log('::Task 5::');

var singleItem = document.querySelector('#pageTitle');
alert(singleItem.nodeName);
console.log(singleItem);

// Get both the pageTitle and all .find_me items
var manyItems = document.querySelectorAll('#pageTitle, .find_me'); 
console.log('HTMLCollection of "#pageTitle, .find_me":');
console.log(manyItems);

console.log('Each value as we loop through:');
for (var i = 0; i < manyItems.length; i++) {
	console.log(manyItems[i]);
	alert(manyItems[i].nodeName);
}