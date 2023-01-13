import React , { Component } from "react";
import FormHeader from "../../../components/UI/UI-Form/Form/form-header/FormHeader";
import Aux from "../../../hoc/auxi/Auxi";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class AddNote extends Component {
    state = {

    }
    render(){
        return (
            <Aux>
                <FormHeader
                icon={<FontAwesomeIcon icon={faPlus}/>}> Add Note :</FormHeader>

            </Aux>
        );

    }
}

export default AddNote;