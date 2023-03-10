import React , { Component } from "react";
import FormHeader from "../../../components/UI/UI-Form/Form/form-header/FormHeader";
import Aux from "../../../hoc/auxi/Auxi";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormBody from "../../../components/UI/UI-Form/Form/form-body/FormBody";
import Field from "../../../components/UI/UI-Form/field/Field";
import { createNoteDeFrais, getCategories, updateNote } from "../Services";



class AddNote extends Component {
    
    state = {
        note : {
            id: null,
            description: undefined,
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

        const fetchedCategories = await getCategories();
         this.setState({
             ...this.state,
             categories : fetchedCategories
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
        

        if(this.state.note.id === null) {
            const newId = await createNoteDeFrais(this.state.note);
            if(newId) {
                this.setState({
                    ...this.state,
                    note : {
                        ...this.state.note,
                        id : newId
                    }
                })
            }
        }

        if (this.state.note.id !== null) {
            console.log(this.state.note.id)
            updateNote(this.state.note.id,this.state.note)
        }
        
        // await this.setState({
        //     ...this.state,
        //     saving : true
        // })
        
    }

    render(){
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
                    disabled={this.state.note.category.unit_price !== null}
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
                    value={this.state.note.category}
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

export default AddNote;