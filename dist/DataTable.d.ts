import "./dataTable.css";
interface Column {
    title: string;
    data: string;
}
type RowData = Record<string, string>;
interface DataTableProps {
    id: string;
    className?: string;
    data: RowData[];
    columns: Column[];
}
declare function DataTable({ id, className, data, columns }: DataTableProps): import("react/jsx-runtime").JSX.Element;
export default DataTable;
