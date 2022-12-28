import React,{useState} from "react";

import ReactPaginate from "react-paginate";

const Pagination = ({onpage,initialpage,pageCount}) => {
    return(
        <>
        <ReactPaginate
                nextLabel=" >"
                onPageChange={(event)=>onpage(event?.selected + 1)}
                pageRangeDisplayed={0}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link previous "
                disabledLinkClassName={initialpage == 1 ? "pagination__link--disabled" : "xyz"}
                nextClassName="page-item"
                nextLinkClassName="page-link nextlink"
                activeLinkClassName="active-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                marginPagesDisplayed={0}
                pageLabelBuilder={() => {
                  return `${initialpage} of ${pageCount}`
                }}

              />
        </>
    )
}

export default Pagination