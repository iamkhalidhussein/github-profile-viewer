import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Profile = () => {
    const { user, logout } = useKindeAuth();

    return (
        <div>
            <DropdownMenu>
            <DropdownMenuTrigger><img src={user?.picture || 'https://cdn-icons-png.flaticon.com/512/64/64572.png'} alt={user.given_name} className="w-10 rounded-full"/></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Name: {user.given_name}</DropdownMenuItem>
                <DropdownMenuItem>Email: {user.email}</DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default Profile;