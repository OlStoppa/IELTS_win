import React from 'react';
import { getFirebase } from '../firebase';

class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        const lazyApp = import('firebase/app');
        const lazyDatabase = import('firebase/database')
        Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
            this.database = getFirebase(firebase).database()
        })
    }

    commentChange = (e) => {
        const comment = e.target.value;
        this.setState({value: comment});
    }

    submitComment = (e) => {
        e.preventDefault();
        this.database.ref().set(this.state.value);

    }
    render(){
        return (
            <div>
                <form onSubmit={this.submitComment}>
                    <input onChange={this.commentChange} value={this.state.value}/>
                    <button type="submit" >submit</button>
                </form>
            </div>
        );
    }
}

export default Comments;