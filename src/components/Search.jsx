import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Search = () => {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="@username" className="border-black dark:border-white"/>
            <Button type="submit">Search</Button>
        </div>
    );
};

export default Search;