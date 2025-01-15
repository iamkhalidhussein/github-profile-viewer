import React, { useEffect, useState } from 'react';
import UserLeftSection from '../components/UserLeftSection';
import { RepositorySectionHeader } from '../components/UserRepoSectionHeader';
import { GitHubRepoSection } from '../components/UserRepoSection';
import { GitHubContributions } from '../components/UserContribution';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';


const GithubProfile = () => {
    const [repos, setRepos] = useState([]);
    const location = useLocation();
    const [data, ] = useState(JSON.parse(sessionStorage.getItem('gitsniffer-user')));
    const [page, setPage] = useState(1);
    const [perPage] = useState(10);
    const { user } = useKindeAuth();
    const [noData, setNoData] = useState(false);

    const prevPage = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    };
    
    const nextPage = () => {
        setPage(page + 1)
    };

    useEffect(() => {
            const fetchRepos = async () => {
                const authrizedUser = await user;
                try {
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
                        setNoData(false);
                    } else {
                        setNoData(true);
                    }
                    console.log('fetchedData', fetchedData);
                } catch (error) {
                    console.error('this is the main error', error);
                }
            }
            fetchRepos();
    }, [location.state?.user, page]);

    const handleRepoSearch = (query) => {
        const filteredRepos = fakeRepos.map((repo) => (
            repo.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
            repo.description.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        ));
        setRepos(filteredRepos);
    };

    const handleSorting = (option, direction) => {
        const sortedRepos = [...repos].sort((a, b) => {
            if(option === 'name') {
                return direction === 'asc' ?
                a.name.localeCompare(b.name) :
                b.name.localeCompare(a.name)
            }
            else if(option === 'updated') {
                return direction === 'asc' ?
                new Date(a.lastUpdated).getTime() - new Date(b.lastUpdated).getTime(): new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
            }
            return direction === 'asc' ?
            a[option] - b[option] :
            b[option] - a[option]
        });
        setRepos(sortedRepos);
    };
    console.log('repos', repos,)

    return (
        <div className='bg-gray-200 dark:bg-slate-900 pb-3'>
            <div className='mx-10'><Navbar/></div>
            <div className='flex mx-10 gap-10 '>
            <UserLeftSection {...data}/>
            <div className='bg-white mt-10 pt-4 rounded-md w-full max-h-screen overflow-y-auto'>
                    <RepositorySectionHeader onSearch={handleRepoSearch} onSort={handleSorting} totalCount={data?.public_repos}/>
                    {
                        repos.map((repo) => (
                            <GitHubRepoSection key={repo.name} {...repo}/>
                        ))
                    }
                    <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                        <PaginationPrevious href="#" onClick={() => prevPage()} disabled={page === 1}/>
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationLink href="#">{page}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationNext href="#" onClick={() => nextPage()} disabled={noData}/>
                        </PaginationItem>
                    </PaginationContent>
                    </Pagination>
            </div>
        </div>
        <GitHubContributions/>
    </div>
    );
};

export default GithubProfile;