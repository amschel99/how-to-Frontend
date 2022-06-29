import axios from 'axios';
import {useAuth} from './useAuth';

const useUserName = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('http://localhost:8000/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { ...prev,
                userName:response.data.userName,
                accessToken: response.data.accessToken }
        });
        return response.data.userName;
    }
    return refresh;
};

export default useUserName;