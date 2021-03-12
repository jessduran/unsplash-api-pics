import React, { Component } from 'react'

class SearchBar extends Component {
    state = { term: ''};

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="term">Image search</label>
                        <input 
                            type="text" 
                            name="term" 
                            id="term"
                            onChange={e => this.setState({ term: e.target.value })}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;

