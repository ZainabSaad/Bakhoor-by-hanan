"use strict";
let oders_list = [];
let wish_list = [];
const current_items = [
    {
        data_id: "1",
        img: "1",
        price: "7,000 Naira",
        name: "Dukck Tape",
    },
    {
        data_id: "2",
        img: "2",
        price: "50,000 Naira",
        name: "Pen",
    },
    {
        data_id: "3",
        img: "3",
        price: "15,000 Naira",
        name: "Hand Bag",
    },
    {
        data_id: "4",
        img: "4",
        price: "21,000 Naira",
        name: "Traveling Bag",
    },
    {
        data_id: "5",
        img: "5",
        price: "4000 Naira",
        name: "Slides",
    },
];
const order_link = document.querySelector("#orders_link");
const register = document.querySelector("#Register");
const home_link = document.querySelector("#home_link");
const order_items_section = document.querySelector(".orders_items");
const itemsContainer = document.querySelector("#item_section");
const items_section = document.querySelector(".items");
const orders_container = document.querySelector("#orders_section");
const orders_section = document.querySelector("#orders_section");
let oders_lbutton;
let remove_lbutton;

//functions

(function () {
    orders_container.style.display = "none";
})();

order_link.addEventListener("click", function () {
    itemsContainer.style.display = "none ";
    orders_container.style.display = "block";
});
home_link.addEventListener("click", function () {
    itemsContainer.style.display = "block";
    orders_container.style.display = "none";
});

const renderItems = function (items_array) {
    items_array.forEach((element) => {
        const html = `
        <li class="order_item" data-id="${element.data_id}">
                    <img class="item_img" src="img-${element.img}.jpg" alt="item_img" />
                    <div class="item_description"  id="item_description">
                        <h4 class="item_name_tag">
                            <span class="item_name" id="item_name"> ${element.name}</span>
                        </h4>
                        <h5 class="item_cost_tag">
                            Price:
                            <span class="item_price" id="item_price"
                                >${element.price}</span
                            >
                        </h5>
                        <button class="addButton" id="addToodersList">
                        Place Order
                    </button>
                    </div><br />
                    
                </li>`;
        items_section.insertAdjacentHTML("beforeend", html);
    });
    oders_lbutton = document.querySelectorAll("#addToodersList");
};

const renderodersList = function (oders_list) {
    order_items_section.textContent = " ";
    oders_list.forEach((element) => {
        const html = `
        <li class="order_item" data-id="${element.data_id}">
                    <img class="item_img" src="img-${element.img}.jpg" alt="item_img" />
                    <div class="item_description"  id="item_description">
                        <h4 class="item_name_tag">
                            Item Name
                            <span class="item_name" id="item_name">Shoe</span>
                        </h4>
                        <h5 class="item_cost_tag">
                            Price:
                            <span class="item_price" id="item_price"
                                >${element.price}</span
                            >
                        </h5>
                        <button class="addButton" id="removeFromoders">
                        Remove from oders
                    </button>
                    </div>
                    
                </li>`;
        order_items_section.insertAdjacentHTML("beforeend", html);
    });
    oders_lbutton = document.querySelectorAll("#removeFromoders");

    oders_lbutton.forEach((e) => {
        e.addEventListener("click", function name(e) {
            const item = e.target.closest(".order_item");
            removeFromodersList(item);
        });
    });
    oders_list = [];
};

const addTooders = function (item) {
    console.log(item);
    const itemID = item.dataset.id;
    const d = current_items.find((e) => e.data_id === itemID);
    oders_list.push(d);
    renderodersList(oders_list);
};

const removeFromodersList = function (item) {
    console.log(item);
    const itemID = item.dataset.id;
    const d = current_items.find((e) => e.data_id === itemID);
    oders_list = oders_list.filter(
        (e) => oders_list.indexOf(e) !== oders_list.indexOf(d)
    );
    renderodersList(oders_list);
};

//application
renderItems(current_items);

oders_lbutton.forEach((e) => {
    e.addEventListener("click", function name(e) {
        const item = e.target.closest(".order_item");
        addTooders(item);
    });
});
