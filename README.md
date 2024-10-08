# @flafonso/react-datatable-component

## Description

**@flafonso/react-datatable-component** is a customizable table component for React that enables sorting, filtering, and pagination of data in a dynamic way. It is designed to replace older jQuery-based solutions, offering improved performance and modularity for modern React applications.

This component was developed as part of a project aimed at modernizing an internal employee management application. It’s simple to use and integrates seamlessly into any React project.

## Features

- **Pagination**: Navigate through data pages using "Next" and "Previous" buttons or by selecting a page number directly.
- **Sorting**: Sort the data in ascending or descending order by clicking on column headers.
- **Filtering**: Search the table using a text input to find matching employee records.
- **Rows per page selection**: Allows users to control how many rows are displayed per page via a dropdown selector.

## Installation

```bash
npm install @flafonso/react-datatable-component
```

## Usage Example

Here’s an example of how to integrate the **@flafonso/react-datatable-component** into a React application to display a list of employees.

**Note**: The example uses Redux to manage state. The DataTable component itself is independent of Redux and can be used with any state management approach.

### Basic Usage

```jsx
import { useSelector } from "react-redux";
import { DataTable } from "@flafonso/react-datatable-component";

const columns = [
  { title: "First Name", data: "firstName" },
  { title: "Last Name", data: "lastName" },
  { title: "Start Date", data: "startDate" },
  { title: "Department", data: "department" },
  { title: "Date of Birth", data: "dateOfBirth" },
  { title: "Street", data: "street" },
  { title: "City", data: "city" },
  { title: "State", data: "state" },
  { title: "Zip Code", data: "zipCode" },
];

function EmployeeList() {
  const employees = useSelector((state) => state.employeeList.employees);

  return (
    <>
      <DataTable
        id="employee-table"
        className="employee-table"
        data={employees}
        columns={columns}
      />
    </>
  );
}

export default EmployeeList;
```

### Sample Data
Here’s an example of the kind of data that can be displayed in the table:

```json
[
  {
    "firstName": "Jean",
    "lastName": "Paul",
    "dateOfBirth": "08/17/1995",
    "startDate": "10/02/2022",
    "street": "Rue 123",
    "city": "Ville 123",
    "state": "NC",
    "zipCode": "12323-3434",
    "department": "Human Resources"
  },
  {
    "firstName": "Michelle",
    "lastName": "Gris",
    "dateOfBirth": "05/16/2000",
    "startDate": "10/27/2024",
    "street": "Rue 123",
    "city": "Ville 123",
    "state": "NC",
    "zipCode": "12323",
    "department": "Human Resources"
  }
]
```

### Props

`id` **(string) [required]**  
A unique identifier for the table, used to differentiate between multiple instances of the component.

`className` **(string) [optional]**  
A custom CSS class to style the table.

`data` **(array of objects) [required]**  
The data to be displayed in the table. Each object represents a row in the table, with keys corresponding to the defined columns.

`columns` **(array of objects) [required]**  
Defines the table columns. Each object in the array must have the following properties:
- `title`: The name displayed in the column header.
- `data`: The key in the `data` object that corresponds to the column's values.
Example:
```jsx
const columns = [
  { title: "First Name", data: "firstName" },
  { title: "Last Name", data: "lastName" }
];
```

## Dependencies
The component relies on the following external libraries:

- **React**: 17.0.2 or later
- **ReactDOM**: 17.0.2 or later

