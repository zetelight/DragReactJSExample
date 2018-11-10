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

 