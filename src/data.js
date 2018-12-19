const data ={
    task: {
        "task1": {id: "task1", content: "this is task 1"},
        "task2": {id: "task2", content: "this is task 2"},
        "task3": {id: "task3", content: "this is task 3"},
        "task4": {id: "task4", content: "this is task 4"},
        "task5": {id: "task5", content: "this is task 5"},
        "task6": {id: "task6", content: "this is task 6"},
        "task7": {id: "task7", content: "this is task 7"},
        "task8": {id: "task8", content: "this is task 8"},
        "task9": {id: "task9", content: "this is task 9"},
        "task10": {id: "task10", content: "this is task 10"},
        "task11": {id: "task11", content: "this is task 11"},
        "task12": {id: "task12", content: "this is task 12"},
        "task13": {id: "task13", content: "this is task 13"},
        "task14": {id: "task14", content: "this is task 14"},
        "task15": {id: "task15", content: "this is task 15"},
        "task16": {id: "task16", content: "this is task 16"},
        "task17": {id: "task17", content: "this is task 17"},
        "task18": {id: "task18", content: "this is task 18"},
        "task19": {id: "task19", content: "this is task 19"},
        "task20": {id: "task20", content: "this is task 20"},
        "task21": {id: "task21", content: "this is task 21"},
        "task22": {id: "task22", content: "this is task 22"},
        "task23": {id: "task23", content: "this is task 23"}
    },

    columns: {
        'column1': {
            id: "column1",
            title: "to do",
            taskIds: ["task1","task2","task3","task4", "task10", "task11", "task12","task13","task14","task15","task16","task17", "task18", "task19", "task20", "task21", "task22", "task23"]
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
        'column4': {
            id: "column4",
            title: "done",
            taskIds: ["task8"]
        },
        'column5': {
            id: "column5",
            title: "done",
            taskIds: ["task9"]
        }
    },

    columnOrder: ['column1', 'column2', 'column3', 'column4', 'column5']
};

export default data;