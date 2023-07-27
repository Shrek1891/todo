const nameIcons=(icon)=> {
    if (icon === 'Task') {
        icon = 'task';
    } else if (icon === 'Idea') {
        icon = 'idea';
    } else if (icon === 'Random thought') {
        icon = 'random_thought';
    }
    return icon;
}

export default nameIcons