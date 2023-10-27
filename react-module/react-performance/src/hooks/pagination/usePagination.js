import { useMemo } from "react";

const range = (start, end) => {
    let length  = end - start + 1;
    return Array.from({length}, (_, idx) => idx + start);
}

const DOTS = "...";

const usePagination = ({
    currentPage,
    totalCount,
    siblingCount = 1,
    pageSize
}) => {
    const paginationRange = useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize);

        const totalPageNumbers = siblingCount + 5;

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount
        );

        const showLeftDots = leftSiblingIndex > 2;
        const showRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        // First Page scenario
        if (!showLeftDots && showRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftItemCount); // 1, 5
            // [1, 2, 3, 4, 5, ..., 100];
            return [...leftRange, DOTS, totalPageCount];
        }


        // Last Page scenario
        if (showLeftDots && !showRightDots) {
            const rightItemCount = 3 + 2 * siblingCount; // 5
            const rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        // middle range
        if(showLeftDots && showRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }

    }, [totalCount, pageSize, currentPage, siblingCount]);

    return paginationRange;
}

export {
    usePagination,
    DOTS
}