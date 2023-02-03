import React , { Component } from "react";
import FormHeader from "../../../components/UI/UI-Form/Form/form-header/FormHeader";
import Aux from "../../../hoc/auxi/Auxi";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormBody from "../../../components/UI/UI-Form/Form/form-body/FormBody";
import Field from "../../../components/UI/UI-Form/field/Field";
import { getCategories, getNoteDeFrais, updateNote } from "../Services";


class UpdateNote extends Component {
    

    state = {
        note : {
            id: null,
            description: null,
            unit_price: 0,
            quantity: 0,
            Date : "",
            notes: "",
            category : {
                id : null,
                name : null,
                unit_price :null
            },
            
        },
        categories : [],
        saving : false
    }


    async componentDidMount () {

        const id = this.props.match.params.id;
        const fetchedCategories = await getCategories();
         const fetchedNote = await getNoteDeFrais(id);
         console.log(fetchedNote)
         this.setState({
             ...this.state,
             categories : fetchedCategories,
             note : fetchedNote
         })

    }

    // async componentDidUpdate(prevProps,prevState) {
    //     console.log(prevState.saving)
    //     if(prevState.saving === true) {
    //         // create the new note
    //         if(prevState.note.id === null){
    //             //const newId = createNoteDeFrais(this.state.note)
    //         }else if (prevState.note.id !== null) {
    //             console.log("patch")
    //         }

    //         // stop the change
    //         this.setState({
    //             ...prevState,
    //             saving : false
    //         })
    //     }

    // }

    handleChange = (e) => {
        //Here, We wil put the change Field buisness
        if(e.target.name === "category") {
            const categoryChoised =  this.state.categories.filter(item => item.id === Number(e.target.value))[0]
            this.setState({
                ...this.state,
                note : {
                    ...this.state.note,
                    [e.target.name] : categoryChoised,
                }
            })
        } else {
            this.setState({
                ...this.state,
                note : {
                    ...this.state.note,
                    [e.target.name] : e.target.value,
                }
            })
        }
        

    }

    handleSubmit = async (e) => {

        const id = this.props.match.params.id;
        updateNote(id,this.state.note)
            
           
    }

    

    render(){

        // const {id} = this.props.match.params;
        // console.log(id)
        return (
            <Aux>
                <FormHeader icon={<FontAwesomeIcon icon={faPlus}/>}> Add Note :</FormHeader>
                <FormBody>
                    <Field
                    name="description"
                    label="Description :"
                    value={this.state.note.description}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    type="text"
                    />
                    <Field
                    name="unit_price"
                    label="Unit price :"
                    disabled={(this.state.note.category) ? this.state.note.category.unit_price !== null : false}
                    value={this.state.note.unit_price}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    type="number"
                    />
                    <Field
                    name="Date"
                    label="Date :"
                    value={this.state.note.Date}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    type="date"
                    />
                    <Field
                    name="quantity"
                    label="Quantity :"
                    value={this.state.note.quantity}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    type="number"
                    />

                    <Field
                    name="notes"
                    label="Notes :"
                    value={this.state.note.notes}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    type="text-area"
                    />


                    <Field
                    name="category"
                    label="Category :"
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    type="enum"
                    options ={this.state.categories}
                    />
                    
                    
                </FormBody>

            </Aux>
        );

    }
}

export default UpdateNote;