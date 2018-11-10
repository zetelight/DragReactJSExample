const data ={
    task: {
        "task1": {id: "task1", content: "this is task 1"},
        "task2": {id: "task2", content: "this is task 2"},
        "task3": {id: "task3", content: "this is task 3"},
        "task4": {id: "task4", content: "this is task 4"},
        "task5": {id: "task5", content: "this is task 5"},
        "task6": {id: "task6", content: "this is task 6"},
        "task7": {id: "task7", content: "this is task 7"}
    },

    columns: {
        'column1': {
            id: "column1",
            title: "to do",
            taskIds: ["task1","task2","task3","task4"]
        },
        'column2': {
            id: "column2",
            title: "in progress",
            taskIds: ["task5","task6"]
        },
        'column3': {
            id: "column3",
            title: "done",
            taskIds: ["task7"]
        },
    },

    columnOrder: ['column1', 'column2', 'column3']
};

export default data;