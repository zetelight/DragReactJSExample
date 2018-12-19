import React from 'react';
import styled from 'styled-components';
import Task from './task';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
    flex-grow: 1;
    min-height: 100px;
    overflow: auto;
    height: 100%;
`;


function generate(data) {
    return (
            data.map((task, index) => (
                <Task key={task.id} task={task} index={index}/>
        ))
    );
}

export default class BigColumn extends React.Component {
    render() {
        return (
            <Container>
                {/* <Title>
                    {this.props.column.title}
                </Title> */}
                {/* 
                    type keyword sonly allows button will be moved with same type 
                    type={this.props.column.id === 'column3' ? 'done' : 'active'}                    
                    */
                }
                <Droppable 
                    droppableId={this.props.column.id}
                    isDropDisabled={this.props.isDropDisabled}
                >
                    {(provided, snapshot)=>(
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            <Title > Section 1</Title>
                            {
                                generate(this.props.tasks.slice(0, 4))
                            }
                            <Title > Section 2</Title>
                            {
                                generate(this.props.tasks.slice(4, 7))
                            }
                            <Title > Section 3</Title>
                            {
                                generate(this.props.tasks.slice(7, 10))
                            }                            
                            <Title > Section 4</Title>
                            {
                                generate(this.props.tasks.slice(10))
                            }
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        )
    }
}

// .map((task, index) => (
//     <Task key={task.id} task={task} index={index}/>
// )) 