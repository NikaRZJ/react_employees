import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EployeesList from '../employees-list/employees-list';
import EployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const data = [
        { name: 'John C.', salary: 800, increase: true, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: false, id: 2 },
        { name: 'Carl W.', salary: 15000, increase: true, id: 3 },
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EployeesList data={data} />
            <EployeesAddForm />
        </div>
    );
}

export default App;