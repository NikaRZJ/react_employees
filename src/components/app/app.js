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
                { name: 'John C.', salary: 800, increase: true, like: true, id: nextId() },
                { name: 'Alex M.', salary: 3000, increase: false, like: false, id: nextId() },
                { name: 'Carl W.', salary: 15000, increase: true, like: false, id: nextId() },
            ],
            term: '',
            filter: 'all'
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
            rise: false,
            id: nextId()
        }
        this.setState(({ data }) => {
            const newArr = [...data, newObj];
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        // this.setState(({ data }) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = { ...old, increase: !old.increase };
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }
        // })
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }));
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like': return items.filter(item => item.like);
            case 'rich': return items.filter(item => item.salary > 1000);
            default: return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    onChangeSalary = (id, value) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, salary: value }
                }
                return item
            })
        }))
    }

    render() {
        const { data, term, filter } = this.state;
        const increaseLength = data.filter(item => item.increase);
        let visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo dataLength={data.length} increaseLength={increaseLength.length} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>

                <EployeesList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary}
                />
                <EployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }

}

export default App;