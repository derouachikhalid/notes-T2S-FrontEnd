import React, { Component } from 'react';
import Aux from '../../../hoc/auxi/Auxi';
import { getReports } from '../Services';
import EnhancedTable from './EnhancedTable';

class ListReport extends Component {
    state = {
        reports : []
    }


    async componentDidMount () {
        const fetchedReports = await getReports();
        console.log(fetchedReports)
        this.setState({
            ...this.state,
            reports : fetchedReports

        })

    }
    render() {
        
        return (
            <Aux>
                <EnhancedTable reports={this.state.reports} />
            </Aux>
        );
    }
}

export default ListReport;
