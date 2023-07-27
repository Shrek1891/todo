const createForm = (node) => {
    const form = document.createElement('form');
    form.classList.add('form');
    form.innerHTML = `
        <label for="name">Input name task</label>
        <input type="text" placeholder="name task" name="name" id="name" required>
        <label for="category">select category</label>
        <select name="category" id="category"  required>
                <option value="Task" >Task</option>
                <option value="Random thought">Random thought</option>
                <option value="Idea" >Idea</option>
            </select>
            <label for="camp-week">put time (if need)</label>
           <input type="date" name="day" id="camp-week"
       min="2018-W18" >
       <label for="content">write task</label>
            <textarea name="content" id="content" required></textarea>
            <div>
                <button type="submit">Add</button>
                <button type="button" class="cancel_form">Cancel</button>
            </div>
    `

    node.appendChild(form);
}

export default createForm;