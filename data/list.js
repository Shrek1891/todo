import filterList from "../utils/filterList.js";

export let list = [
    {
        id: 1,
        icon: 'task',
        name: 'Shopping List',
        created: '2022-01-01',
        category: 'Task',
        content: 'Groceries',
        Dates: [],
        cell: ' '
    },
    {
        id: 2,
        icon: 'random_thought',
        name: 'The theory of evolution',
        created: '2022-01-01',
        category: 'Random thought',
        content: 'The Evolution of Humanity',
        Dates: [],
        cell: ' '
    },
    {
        id: 3,
        icon: 'idea',
        name: 'New idea',
        created: '2022-01-01',
        category: 'Idea',
        content: 'Implement a new idea',
        Dates: [],
        cell: ' '
    }

];

export let archive = [{
    id: 'taskId',
    icon: 'task',
    name: 'Task',
    active: filterList.numberOfValueByKey(list,'icon','task'),
    archive: 0,
}, {
    id: 'ideaId',
    icon: 'idea',
    name: 'Idea',
    active: filterList.numberOfValueByKey(list,'icon','idea'),
    archive: 0,
}, {
    id: 'ThouthId',
    icon: 'random_thought',
    name: 'Random thought',
    active: filterList.numberOfValueByKey(list,'icon','random_thought'),
    archive: 0,
}];