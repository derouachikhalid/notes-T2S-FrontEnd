///////////////// la Liste des notes state  /////////////////

// state = {
//     notes : {
//         count : 45,
//         offset : 0,
//         row_number : 10,
//         list : [
//             {
//                 description : {
//                     label : "description",
//                     value : "value"
//                 }
//             }
//         ]
//     },
//     list_fields : {
//         visible_fields : Array(),
//         all_fields : Array()
//     },
//     loading : Boolean,
// }


let x = [{
    id: "f84a0d3c-52a5-4570-a1e0-5e4f62915c6d",
    description: "dejeuner9997",
    unit_price: 500,
    quantity: 1,
    taxes: null,
    notes: null,
    createdAt: "2022-12-05T23:39:35.438Z",
    modifiedAt: "2022-12-25T11:30:24.655Z",
    paye_par: null,
    file: null,
    employee: null,
    state: "",
    deletedAt: null
    },
    {
        id: "f84a0d3c-52a5-4570-a1e0-5e4f62915c6d",
        description: "dejeuner9997",
        unit_price: 500,
        quantity: 1,
        taxes: null,
        notes: null,
        createdAt: "2022-12-05T23:39:35.438Z",
        modifiedAt: "2022-12-25T11:30:24.655Z",
        paye_par: null,
        file: null,
        employee: null,
        state: "",
        deletedAt: null
        }]

const y = Object.values(x).map(yItem => (
    yItem = Object.keys(yItem).map(y1Item => (
        y1Item = {
            name : y1Item,
            value : yItem[y1Item]
        }
    ))
));

console.log(y)
