// 1. Create a new array `shoppingList` with a few string elements
const shoppingList = ['Bread', 'Cooking Oil', 'Frying Pan']


// 2. Using `forEach`, log every element of the `shoppingList` array to the console

shoppingList.forEach((element) => { console.log(element) });


// 3. For each element in the `shoppingList` array, create an `<li>` node and
//    append it to the `<ul>` element on the page (use `document.createElement`
//    and `.appendChild`)

// Method 1:

shoppingList.forEach((element) => {

    // create <li> Tag
    const createLiTag = () => {
        let tagLi = document.createElement('li');
        tagLi.textContent = element;
        return tagLi
    }

    // add the Li to the Ul
    const addLiTag = () => {
        return document.querySelector('ul').appendChild(createLiTag())
    }

    // Call the Add <li> Tag function!!!!!
    addLiTag()

})

// Method 2
shoppingList.forEach((element, index) => {

    // create <li> Tag
    const createLiTag = () => {
        return document.createElement('li');
    }

    // add the Li to the Ul
    const addLiTag = () => {
        return document.querySelector('ul').appendChild(createLiTag())
    }

    // Call the Add <li> Tag function!!!!!
    addLiTag()

    // Add the shopping list elements to the created lists
    document.querySelector('ul').querySelectorAll('li')[index + 3].textContent = element
})

// Method 3 - Its better to create the function outside then call it in the loop

// create <li> Tag
const createLiTag = (element) => {
    let tagLi = document.createElement('li');
    tagLi.textContent = element;
    return tagLi
}

// add the Li to the Ul
const addLiTag = (element) => {
    return document.querySelector('ul').appendChild(createLiTag(element))
}

// Loop through shopping list
shoppingList.forEach((element) => {
    // Call the createLiTag
    createLiTag(element)
    // Call the Add <li> Tag function!!!!!
    addLiTag(element)
})





// 4. Create a new array `numbers` with a few numeric elements

const numbers = [1, 232, 31, 315, -123, -2512]


// 5. Using `map` on the `numbers` array, create a new array called
//    `squareNumbers` where each element is the square of the corresponding
//    element in the `numbers` array

const fuctionThatSquaresNumbers = (num) => {
    return num ** 2;
}

const squareNumbers = numbers.map(fuctionThatSquaresNumbers);

console.log(squareNumbers);
