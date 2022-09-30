import React from 'react';

function Pagination({ page, setPage }) {
    let pages = [];

    const offset = page < 5 ? 5 - page : 0;
    for (let i = page - 5; i <= page + 5; i++) {
        pages.push(i + offset);
    }
    return pages.map((pn) => <button
        className="my-8 mx-2 py-1 px-3 border border-orange-500 rounded"
        onClick={() => setPage(pn)}>{pn + 1}</button>);

}

export default Pagination
