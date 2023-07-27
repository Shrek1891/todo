const createBtn = (node,className,text) => {
    const button = document.createElement('button');
    button.classList.add(className);
    button.innerText = text;
    node.after(button);
}

export default createBtn;