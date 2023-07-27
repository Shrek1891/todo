import filterList from "./filterList.js";
import createRow from "./createRow.js";
import createTitle from "./createTitle.js";

const createLogTable=(logList,listOfTask,listOfArchive,node,archiveMenuItem)=> {

    const res =logList.map((item)=> {
        item['active']=filterList.numberOfValueByKey(listOfTask,'icon',item['icon']);
        item['archive']=filterList.numberOfValueByKey(listOfArchive,'icon',item['icon']);
        return item;

    })
    createRow(res, node);
}

export default createLogTable;