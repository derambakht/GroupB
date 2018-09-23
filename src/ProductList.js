import React, { Component } from 'react'
import Select from 'react-select';
import { Redirect } from 'react-router-dom'

export default class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
            products: [
                // { id: 1, productName: 'Nokia 1100', categoryId: 1, categoryName: 'Mobile', price: 500 },
                // { id: 2, productName: 'Tablet 1200', categoryId: 2, categoryName: 'Tablet', price: 700 },
                // { id: 3, productName: 'KB 1300', categoryId: 3, categoryName: 'Keyboard', price: 800 },
            ],
            categories: [
                { value: 1, label: 'Mobile' },
                { value: 2, label: 'Tablet' },
                { value: 3, label: 'Keyboard' },
            ]
        };
        this.addNewItem = this.addNewItem.bind(this);
        this.loadData = this.loadData.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.editRow = this.editRow.bind(this);
        this.insertItem = this.insertItem.bind(this);
        this.editItem = this.editItem.bind(this);

        this.serviceUrl = 'http://localhost:4373/api/product';
    }
    componentWillMount() {
        this.loadData();
    }
    loadData() {
        const token = window.localStorage.getItem('token');
        if (!token) {
            this.setState({ authenticated: false });
            return;
        }
        this.setState({ authenticated: true });
        fetch(this.serviceUrl, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(response => response.json())
            .then(data => this.setState({ products: data}));
    }
    addNewItem() {
        let temp = this.state.products;
        let newItem = { productName: 'new item', price: 0, editing: true };
        temp.push(newItem);
        this.setState({ products: temp });
    }
    saveItem() {
        let newItem = {};
        newItem.id = this.refs.id.value;
        newItem.productName = this.refs.productName.value;
        newItem.categoryId = this.refs.categoryId.state.value.value;
        newItem.categoryName = this.refs.categoryId.state.value.label;
        newItem.price = this.refs.price.value;

        if (newItem.id && newItem.id > 0) {
            //edit
            this.editItem(newItem);
        } else {
            //add
            this.insertItem(newItem);
        }


    }
    insertItem(newItem) {
        fetch(this.serviceUrl, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(newItem), // body data type must match "Content-Type" header
        })
            .then(response => response.json())
            .then(data => data.isSuccess ? this.loadData() : window.alert('error in saveItem'));
    }
    editItem(newItem) {
        fetch(this.serviceUrl, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(newItem), // body data type must match "Content-Type" header
        })
            .then(response => response.json())
            .then(data => data.isSuccess ? this.loadData() : window.alert('error in saveItem'));
    }
    removeItem(id) {
        if (!window.confirm('are you sure remove item?')) {
            return;
        }
        fetch(this.serviceUrl + '/' + id, {
            method: "Delete", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, same-origin, *omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
        })
            .then(response => response.json())
            .then(data => data.isSuccess ? this.loadData() : window.alert('error in removeItem'));

    }
    editRow(id, index) {
        let temp = this.state.products;
        temp[index].editing = true;
        this.setState({ products: temp });
    }
    generateDisplayModeRow(item, index) {
        return (
            <tr>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.categoryName}</td>
                <td>{item.price}</td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-primary btn-sm" onClick={() => this.editRow(item.id, index)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={() => this.removeItem(item.id)}>
                            <i className="fa fa-remove"></i>
                        </button>
                    </div>
                </td>
            </tr>
        );
    }

    generateEditModeRow(item, index) {
        return (
            <tr>
                <td>
                    <input type="hidden" ref="id" value={item.id} />
                    {item.id}</td>
                <td>
                    <input className="form-control" ref="productName" defaultValue={item.productName} />

                </td>
                <td>
                    <Select ref="categoryId"
                        defaultValue={this.state.categories.find(category => category.value == item.categoryId)}
                        options={this.state.categories} />
                </td>
                <td>
                    <input className="form-control" ref="price" defaultValue={item.price} />

                </td>
                <td>
                    <div className="btn-group">
                        <button className="btn btn-success btn-sm" onClick={this.saveItem}>
                            <i className="fa fa-save"></i>
                        </button>
                        <button className="btn btn-warning btn-sm">
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
    render() {
        if (!this.state.authenticated) {
            return (<Redirect to='/' />);
        }
        return (
            <div className="container">
                <div className="text-left">
                    <button className="btn btn-dark btn-sm" onClick={this.addNewItem}>
                        <i className="fa fa-plus"></i>
                        Add New Row
                    </button>
                    <hr />
                </div>
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.state.products.map(this.generateRow)} */}
                        {this.state.products.map((product, index) =>
                            product.editing ? this.generateEditModeRow(product, index)
                                : this.generateDisplayModeRow(product, index))}
                    </tbody>
                </table>
            </div>
        )
    }
}
