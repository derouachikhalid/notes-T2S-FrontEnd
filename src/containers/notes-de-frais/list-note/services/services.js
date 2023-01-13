import axios from "axios";

export  async function   fetchNotes(param,callback){
    const url = `/notes-de-frais?limit=${param.limit}&limit=${param.offset}`;
    const response = await axios.get(url);
    const data = response.data;
    if(data){
        const fetchedData = { 
            ...data,
            list : Object.values(data.list).map(yItem => (
            yItem = Object.keys(yItem).map(y1Item => (
                y1Item = {
                    name : y1Item,
                    value : yItem[y1Item]
                }
            ))
        ))
    }
    }

    console.log(fetchedData)
}