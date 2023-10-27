import { useState } from "react";
import "./table.css";
import data from "../data/mock-data.json";
import { useMemo } from "react";
import Pagination from "../hooks/pagination/Pagination";

const PaginationExample = () => {
    let pageSize = 10;
    const [ currentPage, setCurrentPage ] = useState(1);

    const currentData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * 10;
        const lastPageIndex = firstPageIndex + pageSize;
        return data.slice(firstPageIndex, lastPageIndex); // start length
    }, [currentPage]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>FIRST NAME</td>
                        <td>LAST NAME</td>
                        <td>EMAIL</td>
                        <td>PHONE</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentData.map(item => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    )
}

export default PaginationExample;