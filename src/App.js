import React, {Component} from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';
import ErrorBoundry from './ErrorBoundry';


class App extends Component {
	constructor(){
		super()
		this.state = {
			Robots: [],
			SearchField: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> {
				return response.json();
			})
			.then(users => {
				this.setState({Robots: users})
			})
	}
	onSearchChange = (event) => {
		this.setState({SearchField: event.target.value})
	}
	render(){
		const filteredRobots = this.state.Robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
		})
		if (this.state.Robots.length === 0){
			return <h2 className='f1 tc'>Loading...</h2>
		}
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList Robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;