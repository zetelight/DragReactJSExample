import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightgrey;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 2px;
    background-color: ${props => (
        props.isDragDisabled 
        ? 'lightgrey'
        : props.isDragging 
        ? 'lightgreen' 
        : 'white')};
    display: flex;
`;

const Handle = styled.div`
    width: 20px;
    height: 20px;
    background-color: orange;
    border-radius: 4px;
    margin-right: 8px;
`;
// snapshot is for styling
export default class Task extends React.Component {
    render() {
        const isDragDisabled = this.props.task.id === 'task1';
        return (
            <Draggable 
                draggableId={this.props.task.id} 
                index={this.props.index}
                isDragDisabled={isDragDisabled}
            >
            {(provided, snapshot) => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                    isDragDisabled={isDragDisabled}
                >
                    {/* We create a new handle to allow user only opearte this part of button */}
                    {/* If we delete the dragHandleProps above, we are only able to use the orange box to move button */}
                    <Handle  {...provided.dragHandleProps} />
                    {this.props.task.content}</Container>
            )}
            </Draggable>
        );
    }
}