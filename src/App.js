import React, { Component } from "react";
import Input from "./components/Input";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import uuid from "uuid";

class App extends Component {
	state = {
		items: [],
		id: uuid(),
		itemName: "",
		editItem: false
	};

	handleInputChange = e => {
		this.setState({
			itemName: e.target.value
		});
	};

	handleInputSubmit = e => {
		e.preventDefault();
		const newItem = {
			id: this.state.id,
			title: this.state.itemName
		};

		const updatedItems = [...this.state.items, newItem];

		this.setState({
			items: updatedItems,
			itemName: "",
			id: uuid(),
			editItem: false
		});
	};

	clearList = () => {
		this.setState({
			items: []
		});
	};

	handleDelete = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id);
		this.setState({
			items: filteredItems
		});
	};

	handleEdit = id => {
		const filteredItems = this.state.items.filter(item => item.id !== id);

		const selectedItem = this.state.items.find(item => item.id === id);

		this.setState({
			items: filteredItems,
			itemName: selectedItem.title,
			editItem: true,
			id: id
		});
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h3 className="text-capitalize text-center">Todo Input </h3>
						<Input
							itemName={this.state.itemName}
							handleInputChange={this.handleInputChange}
							handleInputSubmit={this.handleInputSubmit}
							editItem={this.state.editItem}
						/>
						<List
							items={this.state.items}
							clearList={this.clearList}
							handleDelete={this.handleDelete}
							handleEdit={this.handleEdit}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
