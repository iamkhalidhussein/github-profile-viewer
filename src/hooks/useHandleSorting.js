const useHandleSorting = (repos, setRepos) => {
    const handleSorting = (option, direction) => {
        console.log(option)
        const sortedRepos = [...repos].sort((a, b) => {
            if(option === 'name') {
                return direction === 'asc' ?
                a.name.localeCompare(b.name) :
                b.name.localeCompare(a.name)
            }
            else if(option === 'updated') {
                console.log(a)
                return direction === 'asc' ?
                new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime(): new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
            } else if(option === 'forks') {
                return direction === 'asc' ?
                a.forks_count - b.forks_count :
                b.forks_count - a.forks_count
            } else if(option === 'stars') {
                return direction === 'asc' ?
                a.stargazers_count - b.stargazers_count : 
                b.stargazers_count - a.stargazers_count
            }
            return direction === 'asc' ?
            a[option] - b[option] :
            b[option] - a[option]
        });
        setRepos(sortedRepos);
    };
    return handleSorting;
};

export default useHandleSorting;