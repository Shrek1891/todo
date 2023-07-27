import './style.css'
import {archiveMenu, menuItem} from "./constants/constants.js";
import {archive, list} from "./data/list.js";
import createTitle from "./utils/createTitle.js";
import createRow from "./utils/createRow.js";
import createBtn from "./utils/createBtn.js";
import createForm from "./utils/form.js";
import filterList from "./utils/filterList.js";
import createLogTable from "./utils/createLogTable.js";
import nameIcons from "./utils/nameIcons.js";

const main = document.querySelector('#app');
const main_table = document.querySelector('#main_table');
const log_table = document.querySelector('#log_table');
let listOfArchive = [];
let listOfTask = [...list];
let logList = [...archive];

createTitle(menuItem, main_table, true);
createRow(list, main_table, true);
createBtn(main_table, 'add', 'Add task');
createTitle(archiveMenu, log_table);
createRow(archive, log_table);
createBtn(log_table, 'show_archive', 'Show archive');
// add new task
const addBtn = document.querySelector('.add');
addBtn.addEventListener('click', () => {
    createForm(main);
    const form = document.querySelector('form');
    const cancelForm = document.querySelector('.cancel_form');
    cancelForm.addEventListener('click', () => {
        form.remove();
    });
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const name = document.querySelector('#name').value;
        const category = document.querySelector('#category').value;
        const time = document.querySelector('#camp-week').value;
        const content = document.querySelector('#content').value;
        const icon = nameIcons(category);
        const newItem = {
            id: Math.random(),
            icon,
            name,
            created: new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear(),
            category,
            content: content.length > 20 ? content.substring(0, 17) + '...' : content,
            Dates: time,
            cell: ''
        }
        listOfTask.push(newItem);
        main_table.innerHTML = '';
        createTitle(menuItem, main_table, true);
        createRow(listOfTask, main_table, true);
        log_table.innerHTML = '';
        createTitle(archiveMenu, log_table);
        createLogTable(logList, listOfTask, listOfArchive, log_table);
        form.remove();
    })
});
main_table.addEventListener('click', (e) => {
    const node = e.target.closest('.row');
    const id = e.target.closest('.row').id;
    //Delete from main table
    if (e.target.closest('div').classList.contains('delete')) {
        e.target.closest('.row').remove();
        listOfTask = [...filterList.delete(listOfTask, id)];
        log_table.innerHTML = '';
        createTitle(archiveMenu, log_table);
        createLogTable(logList, listOfTask, listOfArchive, log_table);
    }
    //edit
    if (e.target.closest('div').classList.contains('edit')) {
        const name = node.querySelector('.name').innerHTML.trim();
        const category = node.querySelector('.category').innerHTML.trim();
        const content = node.querySelector('.content').innerHTML.trim();
        const time = node.querySelector('.Dates').innerHTML.trim();
        const icon = nameIcons(category);
        console.log(name, category, content, time, icon);
        createForm(main);
        const form = document.querySelector('form');
        const cancelForm = document.querySelector('.cancel_form');
        cancelForm.addEventListener('click', () => {
            form.remove();
        });
        const nameInput = document.querySelector('#name');
        const categoryInput = document.querySelector('#category');
        const contentInput = document.querySelector('#content');
        const timeInput = document.querySelector('#camp-week');
        nameInput.value = name;
        categoryInput.value = category;
        contentInput.value = content;
        timeInput.value = time;
        form.addEventListener('submit', (ev) => {
            ev.preventDefault();
            console.log('edit')
            const nameEdit = document.querySelector('#name').value;
            const categoryEdit = document.querySelector('#category').value;
            const timeEdit = document.querySelector('#camp-week').value;
            const contentEdit = document.querySelector('#content').value;
            const iconEdit = nameIcons(categoryEdit);
            const resArray = listOfTask.map((item) => {
                if (item.id === +id) {
                    item.name = nameEdit;
                    item.category = categoryEdit;
                    item.content = contentEdit;
                    item.Dates = timeEdit !== time ? `${time} , ${timeEdit}` : timeEdit;
                    item.icon = iconEdit;
                }
                return item;
            });
            listOfTask = [...resArray];
            main_table.innerHTML = '';
            createTitle(menuItem, main_table, true);
            createRow(listOfTask, main_table, true);
            log_table.innerHTML = '';
            createTitle(archiveMenu, log_table);
            createLogTable(logList, listOfTask, listOfArchive, log_table);
            form.remove();
        })
    }
    if (e.target.closest('div').classList.contains('archive')) {
        const arrChiveItem = filterList.getById(listOfTask, id);
        listOfTask = [...filterList.delete(listOfTask, id)];
        listOfArchive = [...listOfArchive, ...arrChiveItem];
        e.target.closest('.row').remove();
        log_table.innerHTML = '';
        createTitle(archiveMenu, log_table);
        createLogTable(logList, listOfTask, listOfArchive, log_table);
    }
})
const archiveBtn = document.querySelector('.show_archive');
archiveBtn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.classList.add('show_archive_table');
    main.appendChild(div);
    const btnClose = document.createElement('button');
    btnClose.classList.add('btnCnl');
    btnClose.innerHTML = 'close';
    div.appendChild(btnClose);
    createTitle(menuItem, div, true);
    createRow(listOfArchive, div, true);
    btnClose.addEventListener('click', () => {
        div.remove();
    })
    const show_archive_table = document.querySelector('.show_archive_table');
    const editsIcons = show_archive_table.querySelectorAll('.edit');
    editsIcons.forEach((item) => {
        item.innerHTML = ' ';
    })
    show_archive_table.addEventListener('click', (e) => {
        const node = e.target.closest('.row');
        if (node) {
            const id = e.target.closest('.row').id;
            //Delete from main table
            if (e.target.closest('div').classList.contains('delete')) {
                e.target.closest('.row').remove();
                listOfArchive = [...filterList.delete(listOfArchive, id)];
                log_table.innerHTML = '';
                createTitle(archiveMenu, log_table);
                createLogTable(logList, listOfTask, listOfArchive, log_table);
            }
            if (e.target.closest('div').classList.contains('archive')) {
                const arrChiveItem = filterList.getById(listOfArchive, id);
                listOfArchive = [...filterList.delete(listOfArchive, id)];
                listOfTask = [...listOfTask, ...arrChiveItem];
                e.target.closest('.row').remove();
                log_table.innerHTML = '';
                createTitle(archiveMenu, log_table);
                createLogTable(logList, listOfTask, listOfArchive, log_table);
                main_table.innerHTML = '';
                createTitle(menuItem, main_table, true);
                createRow(listOfTask, main_table, true);
            }
        }
    })
})






