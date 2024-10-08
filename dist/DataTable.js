"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = require("react");
require("./dataTable.css");
function DataTable({ id, className, data, columns }) {
    const [columnSort, setColumnSort] = (0, react_1.useState)({ id: columns[0].data, direction: "asc" });
    const [search, setSearch] = (0, react_1.useState)("");
    const [rowsPerPage, setRowsPerPage] = (0, react_1.useState)(10);
    const [currentPage, setCurrentPage] = (0, react_1.useState)(0);
    const sortedData = (0, react_1.useMemo)(() => {
        return [...data].sort((a, b) => {
            if (a[columnSort.id] < b[columnSort.id])
                return columnSort.direction === "asc" ? -1 : 1;
            if (a[columnSort.id] > b[columnSort.id])
                return columnSort.direction === "asc" ? 1 : -1;
            return 0;
        });
    }, [data, columnSort]);
    const dataMatcheSearch = (0, react_1.useMemo)(() => {
        return sortedData.filter((row) => {
            for (const key in row) {
                if (row[key].toLowerCase().includes(search)) {
                    return true;
                }
            }
            return false;
        });
    }, [search, sortedData]);
    const paginationData = (0, react_1.useMemo)(() => {
        const startIndex = rowsPerPage * currentPage;
        return dataMatcheSearch.slice(startIndex, startIndex + rowsPerPage);
    }, [dataMatcheSearch, currentPage, rowsPerPage]);
    const rowContent = (rowData) => {
        return columns.map((column, index) => ((0, jsx_runtime_1.jsx)("td", { className: columnSort.id === column.data ? "column-short_cell" : "", children: rowData[column.data] }, index)));
    };
    const handleColumnSort = (columnId) => {
        if (columnSort.id === columnId) {
            setColumnSort({
                ...columnSort,
                direction: columnSort.direction === "asc" ? "desc" : "asc",
            });
        }
        else {
            setColumnSort({ id: columnId, direction: "asc" });
        }
    };
    const handleSearch = (e) => {
        setSearch(e.target.value.toLocaleLowerCase());
        setCurrentPage(0);
    };
    const handleSelectRows = (e) => {
        setRowsPerPage(Number(e.target.value));
    };
    const maxPage = (0, react_1.useMemo)(() => {
        return Math.ceil(dataMatcheSearch.length / rowsPerPage);
    }, [dataMatcheSearch, rowsPerPage]);
    const nextPage = () => {
        if (currentPage < maxPage - 1) {
            setCurrentPage(currentPage + 1);
        }
    };
    const previousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };
    const paginateBtnPage = () => {
        const btnList = [];
        for (let i = 0; i < maxPage; i++) {
            btnList.push((0, jsx_runtime_1.jsx)("a", { className: `paginate_button ${currentPage === i ? "current" : ""}`, onClick: () => {
                    setCurrentPage(i);
                }, children: i + 1 }, `paginate-${i}`));
        }
        return btnList;
    };
    return ((0, jsx_runtime_1.jsxs)("div", { id: `${id}_wrapper`, className: "dataTables_wrapper", children: [(0, jsx_runtime_1.jsxs)("div", { className: "dataTables-header", children: [(0, jsx_runtime_1.jsx)("div", { id: `${id}_length`, className: "dataTables_length", children: (0, jsx_runtime_1.jsxs)("label", { children: ["Show", " ", (0, jsx_runtime_1.jsxs)("select", { name: `${id}_length`, onChange: handleSelectRows, children: [(0, jsx_runtime_1.jsx)("option", { value: "10", children: "10" }), (0, jsx_runtime_1.jsx)("option", { value: "25", children: "25" }), (0, jsx_runtime_1.jsx)("option", { value: "50", children: "50" }), (0, jsx_runtime_1.jsx)("option", { value: "100", children: "100" })] }), " ", "entries"] }) }), (0, jsx_runtime_1.jsx)("div", { id: `${id}_filter`, className: "dataTables_filter", children: (0, jsx_runtime_1.jsxs)("label", { children: ["Search:", " ", (0, jsx_runtime_1.jsx)("input", { type: "search", id: "input-search", onChange: handleSearch })] }) })] }), (0, jsx_runtime_1.jsxs)("table", { id: id, className: `${className} dataTable`, children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsx)("tr", { children: columns.map((column, index) => ((0, jsx_runtime_1.jsx)("th", { onClick: () => {
                                    handleColumnSort(column.data);
                                }, className: columnSort.id === column.data ? columnSort.direction : "", children: column.title }, index))) }) }), (0, jsx_runtime_1.jsx)("tbody", { children: dataMatcheSearch.length > 0 ? (paginationData.map((rowData, index) => ((0, jsx_runtime_1.jsx)("tr", { children: rowContent(rowData) }, index)))) : ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { className: "dataTables_empty", colSpan: columns.length, children: "No matching records found" }) })) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "dataTables-footer", children: [(0, jsx_runtime_1.jsxs)("div", { className: "dataTables_info", id: `${id}_info`, children: ["Showing", " ", `${paginationData.length > 0 ? rowsPerPage * currentPage + 1 : 0} to ${paginationData.length} of ${dataMatcheSearch.length}`, dataMatcheSearch.length !== sortedData.length &&
                                ` (filtered from ${data.length} total entries)`] }), (0, jsx_runtime_1.jsxs)("div", { className: "dataTables_paginate", id: `${id}_paginate`, children: [(0, jsx_runtime_1.jsx)("button", { className: "paginate_button", onClick: previousPage, disabled: currentPage === 0, children: "Previous" }), (0, jsx_runtime_1.jsx)("span", { children: paginateBtnPage() }), (0, jsx_runtime_1.jsx)("button", { className: "paginate_button", onClick: nextPage, disabled: maxPage === 0 || currentPage === maxPage - 1, children: "Next" })] })] })] }));
}
exports.default = DataTable;
