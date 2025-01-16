import { toast } from "react-toastify";

const useHandleRepoSearch = (repos, setRepos) => {
    const handleRepoSearch = (query) => {
        const filteredRepos = repos.filter((repo) => {
            const nameMatch = repo?.name?.toLocaleLowerCase().includes(query.toLocaleLowerCase());
            const descriptionMatch = repo?.description?.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || false;
            return nameMatch || descriptionMatch;
        });
        if(filteredRepos.length === 0) {
            toast.error('No Ripository matched in this page', {
                position: 'bottom-right'
            })
            console.log('no ripo found')
        }
        setRepos(filteredRepos);
    };
    return handleRepoSearch;
};

export default useHandleRepoSearch;