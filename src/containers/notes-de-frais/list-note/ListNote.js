import React, { Component } from 'react';
import Aux from '../../../hoc/auxi/Auxi';
import {  getNotesDeFrais } from '../Services';
import EnhancedTable from './EnhancedTable';

class ListNote extends Component {
    state = {
        notes : []
    }


    async componentDidMount () {
        const fetchedNotes = await getNotesDeFrais();
        console.log(fetchedNotes)
        this.setState({
            ...this.state,
            notes : fetchedNotes

        })

    }
    render() {
        
        return (
            <Aux>
                <EnhancedTable notes={this.state.notes} />
            </Aux>
        );
    }
}

export default ListNote;
