import React, { useState } from 'react';
import UserLeftSection from '../components/UserLeftSection';
import { RepositorySectionHeader } from '../components/UserRepoSectionHeader';
import { GitHubRepoSection } from '../components/UserRepoSection';

const fakeRepos = [
    {
        name: "next.js",
        description: "The React Framework for the Web",
        stars: 106542,
        forks: 24185,
        watchers: 106542,
        issues: 2176,
        language: "JavaScript",
        lastUpdated: "2 days ago"
    },
    {
        name: "react",
        description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        stars: 203000,
        forks: 42000,
        watchers: 203000,
        issues: 1200,
        language: "JavaScript",
        lastUpdated: "1 day ago"
    }
];

const GithubProfile = () => {
    const [repos, setRepos] = useState(fakeRepos);

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

    return (
        <div className='bg-gray-200 h-screen'>
            <div className='flex mx-10 gap-10 '>
            <UserLeftSection/>
            <div className='bg-white mt-10 pt-4 rounded-md border w-full'>
                <div>
                    <RepositorySectionHeader onSearch={handleRepoSearch} onSort={handleSorting} totalCount={repos.length}/>
                    {
                        repos.map((repo) => (
                            <GitHubRepoSection key={repo.name} {...repo}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    );
};

export default GithubProfile;