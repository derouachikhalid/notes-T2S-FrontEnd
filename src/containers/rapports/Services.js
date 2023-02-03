import axios from "axios";

const REPORTS_URL = "/reports"
const NOTE_DE_FRAIS_URL = "/notes-de-frais"

export const  getReports = async () => {
    const response = await axios.get(REPORTS_URL);
    const data = response.data;
    return data;

}

export const  getNoteDeFrais = async () => {
    const response = await axios.get(NOTE_DE_FRAIS_URL+`?submit=false`);
    const data = response.data;
    return data;

}

export const getReport = async (id) => {
    const response = await axios.get(REPORTS_URL+`/${id}`);
    const report = response.data;
    return report;
}