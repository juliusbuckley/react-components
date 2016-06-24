// TODO
var GroceryList = (props) => (
	<div>
		<h1>Grocery List</h1>
			<ul>
				{props.items.map(item =>
					<GroceryListItem item = {item} />
				)}
			</ul>
	</div>
);

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			done: false
		};
	}

	onListItemHoverOver() {
		this.setState({
			done: true
		});
	}
	
	onListItemHoverOut() {
		this.setState({
			done: false
		});
	}

	render() {
		var style = {
			fontWeight: this.state.done ? 'bold' : 'normal'
		};

		return (
			<li style={style} onMouseOver={this.onListItemHoverOver.bind(this)} onMouseOut={this.onListItemHoverOut.bind(this)}>{this.props.item}</li>
		);
	}
}

ReactDOM.render(<GroceryList items = {['Eggs', 'Chicken']}/>, document.getElementById('app'));