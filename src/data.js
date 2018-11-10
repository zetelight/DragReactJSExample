const data ={
    task: {
        "task1": {id: "task1", content: "this is task 1"},
        "task2": {id: "task2", content: "this is task 2"},
        "task3": {id: "task3", content: "this is task 3"},
        "task4": {id: "task4", content: "this is task 4"}
    },

    columns: {
        'column1': {
            id: "column1",
            title: "to do",
            taskIds: ["task1","task2","task3","task4"]
        }
    },

    columnOrder: ['column1']
};

export default data;