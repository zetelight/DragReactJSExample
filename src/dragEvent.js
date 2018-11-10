const start = {
    draggableId: "task1",
    type: "TYPE",
    source: {
        droppableId: "column1",
        index: 0
    }
}


const update = {
    ...start,
    destination: {
        droppableId: "column1",
        index: 1
    }
}

const end = {
    ...update,
    reason: "DROP"
}