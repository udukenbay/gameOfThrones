import React, {useState, useEffect} from 'react';
import Spinner from '../spinner/';
import './itemList.css';


function ItemList({getData, onItemSelected, renderItem}) {

    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
            .then( (data) => {
                updateList(data)
            })
    })


    function renderItems(arr) {

        return arr.map((item) => {
            const {id} = item

            const label = renderItem(item);

            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => onItemSelected(id)}
                    >
                    {label}
                </li>
            )
        })
    }

    if(!itemList) {
        return <Spinner/>
    }

    const items = renderItems(itemList);

    return (

        <ul className="item-list list-group">
            {items}
        </ul>
    );
}


// ItemList.defaultProps = {
//     onItemSelected: () => {}
// }

// const f = (a) => {
//     console.log(a);
//     return (b) => {
//         console.log(a + b);
//     }
// }

// f(1)(2);



// const {getAllCharacters} = new gotService();
export default ItemList;
