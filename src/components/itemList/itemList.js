<<<<<<< HEAD
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

=======
import React, {Component} from 'react';
import Spinner from '../spinner/';
import './itemList.css';
import gotService from '../../services/gotService';

class ItemList extends Component {

    renderItems(arr) {

        return arr.map((item) => {
            const {id} = item

            const label = this.props.renderItem(item);

>>>>>>> 661d65c3b05173a588c7be10adfe277f51ade9ca
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

<<<<<<< HEAD
    const items = renderItems(itemList);

    return (

        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

=======
    render() {

        const {data} = this.props;
        const items = this.renderItems(data);
>>>>>>> 661d65c3b05173a588c7be10adfe277f51ade9ca

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


<<<<<<< HEAD

// const {getAllCharacters} = new gotService();
export default ItemList;
=======

ItemList.defaultProps = {
    onItemSelected: () => {}
}

// const f = (a) => {
//     console.log(a);
//     return (b) => {
//         console.log(a + b);
//     }
// }

// f(1)(2);

const withData = (View, getData) => {
    return class extends Component {

        state = {
            data: null
        }
    
        componentDidMount() {
    
            getData()
                .then( (data) => {
                    this.setState({
                        data
                    })
                })
        }

        render() {
            const {data} = this.state;

            if(!data) {
                return <Spinner/>
            }

            return <View {...this.props} data={data} />
        }
    }
}

const {getAllCharacters} = new gotService();
export default withData(ItemList, getAllCharacters);
>>>>>>> 661d65c3b05173a588c7be10adfe277f51ade9ca
