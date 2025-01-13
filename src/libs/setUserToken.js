import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const setUserToken = () => {
    const { getToken } = useKindeAuth();
            
    const setUser = async () => {
        try {
            const accessToken = await getToken();
            sessionStorage.setItem('git-sniffer-token', accessToken);
        } catch (error) {
            console.error('error while getting token', error);
        }
    };

    return { setUser };
};

export default setUserToken;