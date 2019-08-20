import React from 'react';

class Searchbar extends React.Component{
    state ={
        term: 'Default text'
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }
    render() {
        return(
            <div class="search-bar ui segment">
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor='track-search'>Track Search</label>
                        <input onChange={this.handleChange} name='track-search' type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;