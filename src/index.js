import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import Column from './column';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = data;
    }

    onDragStart = () => {
        // change the color
        document.body.style.color = 'orange';
    };

    onDragUpdate = update => {
        // codes below might be wrong but the idea is here
        // const { destination } = update;
        // const opacity = destination
        //   ? destination.index / Object.keys(this.state.tasks).length
        //   : 0;
        // document.body.style.backgroundColor = `rgba( 153, 141, 217, ${opacity})`;
    };

    onDragEnd = result => {
        document.body.style.color = 'inherit';

        // reset the color
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1); // from the index, we remove one element
            newTaskIds.splice(destination.index, 0, draggableId); // start from destination and insert the taskid


            const newCol = {
                ...start,
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
            return;
        } else {
            // moving from one list too another
            const startTaskIds = Array.from(start.taskIds);
            startTaskIds.splice(source.index, 1);

            const newStart = {
                ...start,
                taskIds: startTaskIds,
            };

            const finishTaskIds = Array.from(finish.taskIds);
            finishTaskIds.splice(destination.index, 0, draggableId);
            const newFinish = {
                ...finish,
                taskIds: finishTaskIds
            };

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newStart.id]: newStart,
                    [newFinish.id]: newFinish
                }
            };

            this.setState(newState);
        }
    };

    render() {
        return (
            <DragDropContext
                onDragEnd = {this.onDragEnd}
                onDragStart= {this.onDragStart}
                onDragUpdate= {this.onDragUpdate}
            >
                <Container>
                    {this.state.columnOrder.map(columnId => {
                    const column = this.state.columns[columnId];
                    const tasks = column.taskIds.map(taskId => this.state.task[taskId]);

                    return <Column key={column.id} column={column} tasks={tasks} />;
                    })}
                </Container>
            </DragDropContext>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

 