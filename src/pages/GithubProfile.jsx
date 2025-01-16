import React, { useEffect, useState } from 'react';
import UserLeftSection from '../components/UserLeftSection';
import { RepositorySectionHeader } from '../components/UserRepoSectionHeader';
import { GitHubRepoSection } from '../components/UserRepoSection';
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
import { ToastContainer, toast } from 'react-toastify';
import UserLeftSectionSkeleton from '../components/UserLeftSectionSkeleton';
import UserRepoSectionSkeleton from '../components/UserRepoSectionSkeleton';
import useHandleRepoSearch from '../hooks/useHandleRepoSearch';
import useHandleSorting from '../hooks/useHandleSorting';

const GithubProfile = () => {
    const [repos, setRepos] = useState([]);
    const location = useLocation();
    const [data, ] = useState(JSON.parse(sessionStorage.getItem('gitsniffer-user')));
    const [page, setPage] = useState(1);
    const [totalRepos, ] = useState(data?.public_repos + (data?.total_private_repos || 0));
    const [perPage, ] = useState(Math.ceil((totalRepos) / 100 * 20));
    const { user } = useKindeAuth();
    const [totalPage, ] = useState(Math.ceil(totalRepos / perPage));
    const [loadingRepo, setLoadingRepo] = useState(false);

    const prevPage = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    };
    
    const nextPage = () => {
        if(totalPage === page) {
            return;
        } else {
            setPage(page + 1)
        }
    };

    useEffect(() => {
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
    }, [location.state?.user, page]);

    const handleRepoSearch = useHandleRepoSearch(repos, setRepos);
    const handleSorting = useHandleSorting(repos, setRepos);
    
    // console.log('repos', repos,)
    // console.log('total page & page', totalPage, page)

    return (
        <div className='bg-gray-200 dark:bg-slate-900 pb-3'>
            <ToastContainer/>
            <div className='md:mx-10 mx-3'><Navbar/></div>
            <div className='md:flex md:mx-10 mx-3 gap-10 '>
            {
                data ? <UserLeftSection {...data}/> : <UserLeftSectionSkeleton/>
            }
            <div className='bg-white dark:bg-black mt-10 pt-4 rounded-md w-full   mb-14'>
                    <RepositorySectionHeader onSearch={handleRepoSearch} onSort={handleSorting} totalCount={totalRepos}/>
                    <div className='overflow-y-auto max-h-screen relative'>
                        {
                            !loadingRepo ? 
                            repos.map((repo) => (
                                <GitHubRepoSection key={repo?.id} {...repo}/>
                            )) : Array.from({ length: 5 }).map((_, idx) => (
                                <UserRepoSectionSkeleton key={idx} />
                            ))
                        }
                    <Pagination>
                    <PaginationContent>
                        <PaginationItem disabled={page === 1}>
                        <PaginationPrevious href="#" onClick={() => prevPage()}/>
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationLink href="#">{page}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem disabled={true}>
                        <PaginationNext href="#" onClick={() => nextPage()}/>
                        </PaginationItem>
                    </PaginationContent>
                    </Pagination>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default GithubProfile;