import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import useFetchGithubUser from "../hooks/useFetchGithubUser";

const Search = () => {
    const [username, setUsername] = useState('');
    const { fetchGithubProfile, loading } = useFetchGithubUser(username);

    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <ToastContainer/>
            <Input type="text" placeholder="@username" onChange={(e) => setUsername(e.target.value)} className="border-black dark:border-white"/>
            {!loading ? <Button type="submit" onClick={fetchGithubProfile}>Search</Button> : <Button>Searching...</Button>}
        </div>
    );
};

export default Search;