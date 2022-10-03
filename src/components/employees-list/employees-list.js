import EmployeesListItem from '../eployees-list-item/eployees-list-item';
import './employees-list.css';


const EployeesList = ({ data, onDelete, onToggleProp, onChangeSalary }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            // <EmployeesListItem name={item.name} salary={item.salary} />
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onChangeSalary={(e) => onChangeSalary(id, e.target.value)}
            />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EployeesList;