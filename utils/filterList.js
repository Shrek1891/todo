const filterList = {
    delete: (list, id) => {
        return list.filter((item) => item.id !== +id);
    },
    getById: (list, id) => {
        return list.filter((item) => item.id === +id);
    },
    numberOfValueByKey: (list, key, value) => {
        return list.filter((item)=>item[key] === value).length

    }

}

export default filterList;