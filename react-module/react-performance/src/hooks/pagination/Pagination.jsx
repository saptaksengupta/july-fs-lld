import "./pagination.scss";
import classnames from 'classnames';
import { DOTS, usePagination } from "./usePagination";
const Pagination = (props) => {

    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;
    
    const paginationRange = usePagination({
        currentPage, 
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onLeft = () => {
        onPageChange(currentPage - 1);
    };

    const onRight = () => {
        onPageChange(currentPage + 1);
    };

    const lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={classnames('pagination-container', {[className]: className})}
        >
            <li 
                className={
                    classnames('pagination-item', {
                        disabled: currentPage === 1
                    })
                }
                onClick={onLeft}
            >
                <div className="arrow left"/>
            </li>
            {
                paginationRange.map(pageNumber => {
                    if (pageNumber === DOTS) {
                        return <li className="pagination-item dots">&#8230;</li>
                    }

                    return (
                        <li 
                        className={classnames('pagination-item', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                        >{pageNumber}</li>
                    )
                })
            }
            <li 
                className={
                    classnames('pagination-item', {
                        disabled: currentPage === lastPage
                    })
                }
                onClick={onRight}
            >
                <div className="arrow right"/>
            </li>
        </ul>
    )

};

export default Pagination;