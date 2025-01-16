const useNextPage = (totalPage, page, setPage) => {
    const nextPage = () => {
        if(totalPage === page) {
            return;
        } else {
            setPage(page + 1)
        }
    };
    return nextPage;
};

export default useNextPage;