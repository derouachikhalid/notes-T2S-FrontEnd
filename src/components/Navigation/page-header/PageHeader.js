import ActionsBar from './actions-bar/ActionsBar';
import DisplayBar from './display-bar/DisplayBar';
import OrderBar from './order-bar/OrderBar';
import './PageHeader.css'

const links = [
    {
        label : "Report",
        to : "/report"
    },
    {
        label : "Notes de Frais",
        to : "/notes-de-frais"
    },
]

const printPDF = (e) => {
    console.log(e)
}

const soumettre = (e) => {
    console.log(e)
}

const actions = [
    {
        label : "Print",
        onClick : printPDF
    },
    {
        label : "Soumettre",
        onClick : soumettre
    },
]

const PageHeader = props => {

    return (
        <div className='PageHeader'>
            <OrderBar/>
            <DisplayBar/>
            <ActionsBar links={links} actions={actions}/>
            

        </div>
    );
}

export default PageHeader;
