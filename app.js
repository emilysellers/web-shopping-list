/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { createItem, getItems, itemBought, deleteAllItems } from './fetch-utils.js';
import { renderItem } from './render-utils.js';

/* Get DOM Elements */
const addItemForm = document.getElementById('add-item-form');
const errorDisplay = document.getElementById('error-display');
const itemList = document.getElementById('item-list');
const deleteAllButton = document.getElementById('delete-all-button');

/* State */
let items = [];
let error = null;
// let user = getUser();

/* Events */
// add window event listener
window.addEventListener('load', async () => {
    const response = await getItems();
    error = response.error;
    items = response.data;

    if (error) {
        displayError();
    } else {
        displayItems();
    }
});

// create item form event listener
addItemForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(addItemForm);
    const newItem = {
        quantity: formData.get('quantity'),
        item: formData.get('item'),
    };

    const response = await createItem(newItem);
    error = response.error;
    const item = response.data;

    if (error) {
        displayError();
    } else {
        items.push(item);
        displayItems();
    }
    addItemForm.reset();
});

// delete all items button event listener

deleteAllButton.addEventListener('click', async () => {
    const response = await deleteAllItems();
    error = response.error;
    //items = response.data;
    if (error) {
        displayError();
    } else {
        items = [];
        displayItems();
    }
});

/* Display Functions */
function displayError() {
    if (error) {
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}

// display items
function displayItems() {
    itemList.innerHTML = '';

    for (const item of items) {
        const itemEl = renderItem(item);
        itemList.append(itemEl);

        itemEl.addEventListener('click', async () => {
            const response = await itemBought(item.id);
            error = response.error;
            const updatedItem = response.data;
            if (error) {
                displayError();
            } else {
                const index = items.indexOf(item);
                items[index] = updatedItem;
                displayItems();
            }
        });
    }
}
