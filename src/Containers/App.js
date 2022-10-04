import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
		Kittens: [],
	    searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ Kittens: users}));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { Kittens, searchfield } = this.state;
		const filterKittens = Kittens.filter(Kittens => {
		  return Kittens.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !Kittens.length ? 
			<h1>Loading</h1> :
		(
		<div className='tc'>
		<h1 className='f1'>Kitten Friends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<ErrorBoundary>
		<CardList Kittens = {filterKittens}/>
		</ErrorBoundary>
		</Scroll>
		</div>
	);

	}
}


export default App;