import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{[field]}</span>
        </li>
    )
}

export {Field};
export default class CharDetails extends Component {

    gotService = new gotService();

    state = {
        char: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }

    onCharDetailsLoaded = (char) => {
        this.setState({
            char,
            loading: false
        });
    }

    updateChar() {
        const {charId} = this.props;

        if(!charId) {
            return;
        }

        this.setState({
            loading: true
        })

        this.gotService.getCharacter(charId)
            .then( this.onCharDetailsLoaded )
            .catch( () => this.onError());
        // this.foo.bar = 0;
    }

    onError() {
        this.setState({
            char: null,
            error: true
        });
    }

    render() {

        if(!this.state.char && this.state.error) {
            return <ErrorMessage/>
        } else if (!this.state.char) {
            return <span className="select-error">Please select character</span>
        }

        const {name, gender, born, died, culture} = this.state.char;

        if(this.state.loading) {
            return (
                <div className="char-details rounded">
                    <Spinner/>
                </div>
            )
        }

        return (
            <div className="char-details rounded">
                <h4>{name ? name : 'no data:'}</h4>
                <ul className="list-group list-group-flush">
                    {this.props.children}
                    {/* <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender ? gender : 'no data:'}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born ? born : 'no data:'}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died ? died : 'no data:'}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture ? culture : 'no data:'}</span>
                    </li> */}
                </ul>
            </div>
        );
    }
}