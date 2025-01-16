const useFetchRepos = (setLoadingRepo, user, data, page, perPage, setRepos) => {

    const fetchRepos = async () => {
        setLoadingRepo(true);
        const authrizedUser = await user;
        // console.log('authorized user', user);
        try {
            //console.log(perPage, 'perpage')
            const response = await fetch(`https://api.github.com/users/${data?.login}/repos?page=${page}&per_page=${perPage}`, {
                headers: {
                    ...(authrizedUser && {
                        Authorization: `Bearer ${import.meta.env.VITE_OAuthAccessToken}`
                    })
                }
            });
            const fetchedData = await response.json();
            if(fetchedData.length > 0) {
                setRepos(fetchedData);
            }
            setLoadingRepo(false);
            // console.log('fetchedData', fetchedData);
        } catch (error) {
            setLoadingRepo(false);
            console.error('this is the main error', error);
        }
    }
    fetchRepos();

    return fetchRepos;
};

export default useFetchRepos;