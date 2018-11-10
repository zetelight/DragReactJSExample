import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import Column from './column';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = data;
    }

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = this.state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1); // from the index, we remove one element
        newTaskIds.splice(destination.index, 0, draggableId); // start from destination and insert the taskid


        const newCol = {
            ...column,
            taskIds: newTaskIds
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns, // keep other column, only modify the newCol id
                [newCol.id]: newCol
            }
        }

        this.setState(newState);
    };

    render() {
        return (
            <DragDropContext
                onDragEnd = {this.onDragEnd}
            >
                {this.state.columnOrder.map(columnId => {
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(taskId => this.state.task[taskId]);

                return <Column key={column.id} column={column} tasks={tasks} />;
                })}
            </DragDropContext>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

 