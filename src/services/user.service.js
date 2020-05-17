import axios from 'axios';

class UserService {

    /**
     * 
     * @param {{
     *  Email: string;
     *  Name: string;
     *  Ddd: string;
     *  PhoneNumber: string;
     * }} body 
     */
    save(body) {
        return axios.post('/user', body);
    }

}

let userInstance = null;

// Singleton pattern
export default (() => {

    const getInstance = () => {
        if (!userInstance) {
            userInstance = new UserService();
        }
        return userInstance;
    }

    return {
        getInstance,
    }

})()
