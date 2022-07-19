const headerMenu = document.querySelector('.header_menu');
const sidebarList = document.querySelector('.sidebar_list');
const galleryItem = document.querySelector('.gallery_item');

const array = [1, 2, 3, 4];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
const galleryItems = [
    "images/summer-3366116_1280.jpg",
    "images/bannack-town-site-3971920_1280.jpg",
    "images/city-2939906_1280.jpg",
    "images/flashlight-2528114_1280.jpg",
    "images/paris-3188274_1280.jpg",
    "images/st-elmo-2160700_1280.jpg",
    "images/stockholm-2971339_1280.jpg",
    "images/window-2492855_1280.jpg",
    "images/tree-4146067_1280.jpg"
]

window.addEventListener('load', () => {
    // header-menu
    array.forEach(element => {
        const headerMenuHTML = `
               <ul class="header_list">
                    <li>
                        <a href="" class="header_link">Link ${element}</a>
                    </li>
                </ul>
            `
        headerMenu.insertAdjacentHTML("beforeend", headerMenuHTML);
    });
    // sidebar
    array2.forEach(element => {
        const sidebarListHTML = `
                      <li>
                          <a href="" class="sidebar_link">LINK 8</a>
                      </li>
                   `
        sidebarList.insertAdjacentHTML("beforeend", sidebarListHTML);
    });
    // gallery_item
    galleryItems.forEach(element => {
        const sidebarListHTML = `
                   <div class="gallery">
                       <img src="${element}" alt="">
                   </div>
                   `
        galleryItem.insertAdjacentHTML("beforeend", sidebarListHTML);
    });
})
