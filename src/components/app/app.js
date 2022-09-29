import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EployeesList from '../employees-list/employees-list';
import EployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';
import { Component } from 'react';
import nextId from '/node_modules/react-id-generator/lib/index.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John C.', salary: 800, increase: true, id: nextId() },
                { name: 'Alex M.', salary: 3000, increase: false, id: nextId() },
                { name: 'Carl W.', salary: 15000, increase: true, id: nextId() },
            ]
        }

    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => elem.id === id);

            const newArr = data.filter(item => item.id !== id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];

            return {
                data: newArr
            }
        })
    }

    addItem = (name, salary) => {
        const newObj = {
            name: name,
            salary: salary,
            increase: false,
            id: nextId()
        }
        console.log(newObj.id);
        // console.log(name, salary);
        this.setState(({ data }) => {
            const newArr = [...data, newObj];
            return {
                data: newArr
            }
        })
    }

    render() {
        // console.log(this.state.data);
        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }

}

export default App;