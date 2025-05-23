// items  step 1

const menu = [
    {
        id: 1,
        title: 'Akara and Pap',
        category: "breakfast",
        price: 10000,
        img: "./menu-image/akara_and_pap.jpg",
        desc: 'Akara are fried bean fritters. Pap is a porridge made from fermented corn or millet flour.',
    },
    {
        id: 2,
        title: 'Moi Moi with Custard or Pap',
        category: "breakfast",
        price: 18000,
        img: "./menu-image/moimoi_n_pap.webp",
        desc: 'Moi moi is a steamed bean pudding. Served with custard or pap.',
    },
    {
        id: 3,
        title: 'Fried Eggs and Dodo',
        category: "breakfast",
        price: 22000,
        img: "./menu-image/fried_eggs_and_plantain.jpg",
        desc: 'Fried eggs and crispy sweet plantains.',
    },
    {
        id: 4,
        title: 'Palm Oil Rice & Chicken',
        category: "lunch",
        price: 25000,
        img: "./menu-image/palmoil_rice_and_chicken.webp",
        desc: 'Spicy palm oil rice with crispy chicken and coleslaw.',
    },
    {
        id: 5,
        title: 'Amala & Ewedu Soup',
        category: "lunch",
        price: 22000,
        img: "./menu-image/Amala_and_Ewedu_Soup.webp",
        desc: 'Amala with Ewedu and Gbegiri soup.',
    },
    {
        id: 6,
        title: 'Spaghetti & Chicken',
        category: "lunch",
        price: 27000,
        img: "./menu-image/spag_and_chicken.webp",
        desc: 'Jollof spaghetti with crispy fried chicken.',
    },
    {
        id: 7,
        title: 'Yam & Egg Stew',
        category: "lunch",
        price: 15000,
        img: "./menu-image/yam_and_egg_sauce.webp",
        desc: 'Boiled yam served with peppery egg stew.',
    },
    {
        id: 8,
        title: 'Pounded Yam & Egusi Soup',
        category: "dinner",
        price: 20000,
        img: "./menu-image/Pounded_Yam_and_Egusi_Soup.webp",
        desc: 'Pounded yam dipped in savory egusi soup.',
    },
    {
        id: 9,
        title: 'Porridge Yam with Fish',
        category: "dinner",
        price: 17000,
        img: "./menu-image/Porridge_Yam.webp",
        desc: 'Yam cooked in tomato and oil with fish.',
    },
    {
        id: 10,
        title: 'Nkwobi',
        category: "dinner",
        price: 15000,
        img: "./menu-image/Nkwobi.jpg",
        desc: 'Cow foot in spicy palm oil sauce.',
    },
];

console.log(menu)

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');

// load items  step 2 display items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);

    function displayMenuItems(menuItems) {
        let displayMenu = menuItems.map(function (item) {

            //   console.log(item);\

            return `<article class="menu-items">
            <img class="photo" src="${item.img}" alt="${item.title}" />
            <div class="item-info">
                <header class="item-header">
                    <h4>${item.title}</h4>
                    <h4 class="price">₦${item.price.toLocaleString()}</h4> 
                </header>
                <div class="item-text">
                    <p>${item.desc}</p>
                </div>
            </div>
        </article>`;
        });
        displayMenu = displayMenu.join('');

        //   console.log(displayMenu);

        sectionCenter.innerHTML = displayMenu;
    }




    // filter items step 3

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;

            // console.log("Clicked category:", category);

            const menuCategory = menu.filter(function (menuItem) {

                // console.log(menuItem.category);

                if (menuItem.category === category) {
                    return menuItem;
                }
            });

            //  console.log(menuCategory);

            if (category === 'all') {
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(menuCategory);
            };
        });
    });
});
