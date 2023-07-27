import {list} from "../data/list.js";
import icons from "../icons/icons.js";

const createRow = (list, node, isIcons) => {

    for (let task of list) {
        let div = document.createElement('div');
        div.classList.add('row');
        for (let item in task) {
            if (item === 'id') {
                div.id = task[item];
            }
            if (item !== 'id') {
                if (item === 'icon') {
                    let cell = document.createElement('div');
                    cell.innerHTML = icons[task[item]];
                    div.appendChild(cell);

                } else {
                    let cell = document.createElement('div');
                    cell.innerHTML = task[item];
                    cell.classList.add(item);
                    div.appendChild(cell);
                }


            }
        }
        if (isIcons) {
            div.lastChild.innerHTML = `
    <div class="edit">${icons.change}</div>
    <div class="archive">${icons.archive}</div>
    <div class="delete">${icons.trash}</div>
`;
            div.lastChild.classList.add('icons');
        }
        node.appendChild(div);
    }
}

export default createRow;
