const usePrevPage = (setPage, page) => {
    const prevPage = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    };
    return prevPage;
};

export default usePrevPage;