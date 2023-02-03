import axios from "axios";

const NOTE_DE_FRAIS_URL = "/notes-de-frais"
const CATEGORIES_URL = "/categorie"

export const createNoteDeFrais = async (note) => {
    const noteToCreate = note;
    const response = await axios.post(NOTE_DE_FRAIS_URL,noteToCreate);
    return response.data.id;
}

export const getNoteDeFrais = async (id) => {
    const response = await axios.get(NOTE_DE_FRAIS_URL+`/${id}`);
    const note = response.data;
    return note;
}

export const updateNote =async (id,note) => {
    const noteToUpdate = note;
    const response = await axios.patch(NOTE_DE_FRAIS_URL+`/${id}`,noteToUpdate)
    const data = response.data;
    console.log(data)
}

export const  getNotesDeFrais = async () => {
    const response = await axios.get(NOTE_DE_FRAIS_URL);
    const data = response.data;
    return data;

}

export const  getCategories = async () => {
    const response = await axios.get(CATEGORIES_URL);
    const data = response.data;
    const updatedData = data.map(item => item = { id : item.id , name : item.name ,unit_price : item.unit_price })
    return updatedData;

}