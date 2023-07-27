import {menuItem} from "../constants/constants.js";
import icons from "../icons/icons.js";

const createTitle = (menuItem, node,isIcons) => {

    const wrapper = document.createElement('div');
    wrapper.classList.add('menu');
    for (let name in menuItem) {
        let div = document.createElement('div');
        div.innerHTML = menuItem[name];
        wrapper.appendChild(div);
    }
    if (isIcons) {
        wrapper.lastChild.innerHTML = `
        <div class="edit"></div>
        <div class="archive">${icons.archive}</div>
        <div class="delete">${icons.trash}</div>
    `
        wrapper.lastChild.classList.add('icons');
    }

    node.appendChild(wrapper);

}

export default createTitle;
