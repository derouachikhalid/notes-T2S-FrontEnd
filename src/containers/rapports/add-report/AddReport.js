import React , { Component } from "react";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aux from "../../../hoc/auxi/Auxi";
import FormHeader from "../../../components/UI/UI-Form/Form/form-header/FormHeader";
import FormBody from "../../../components/UI/UI-Form/Form/form-body/FormBody";
import Field from "../../../components/UI/UI-Form/field/Field";
// import { createNoteDeFrais, getCategories, updateNote } from "../Services";



class AddReport extends Component {
    
    state = {
        report : {
            id : null,
            resume : undefined,

        },
        saving : false
    }


    async componentDidMount () {

        // const fetchedCategories = await getCategories();
        //  this.setState({
        //      ...this.state,
        //      categories : fetchedCategories
        //  })

    }



    handleChange = (e) => {
        //Here, We wil put the change Field buisness
        
            this.setState({
                ...this.state,
                note : {
                    ...this.state.report,
                    [e.target.name] : e.target.value,
                }
            })
        
        

    }

    handleSubmit = async (e) => {
        

        if(this.state.report.id === null) {
            // const newId = await createNoteDeFrais(this.state.note);
            // if(newId) {
            //     this.setState({
            //         ...this.state,
            //         note : {
            //             ...this.state.note,
            //             id : newId
            //         }
            //     })
            // }
        }

        if (this.state.report.id !== null) {
            //updateNote(this.state.note.id,this.state.note)
        }
        
    }

    render(){
        return (
            <Aux>
                <FormHeader icon={<FontAwesomeIcon icon={faPlus}/>}> Add Report :</FormHeader>
                <FormBody>
                     <Field
                    name="resume"
                    label="Resume :"
                    value={this.state.report.resume}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    type="text"
                    />
                    {/*<Field
                    name="unit_price"
                    label="Unit price :"
                    disabled={this.state.note.category.unit_price !== null}
                    value={this.state.note.unit_price}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    type="number"
                    />
                    <Field
                    name="date"
                    label="Date :"
                    value={this.state.note.date}
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
                    /> */}
                    
                    
                </FormBody>

            </Aux>
        );

    }
}

export default AddReport;