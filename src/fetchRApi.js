import axios from "axios"; 

const BASE_URL = "https://frontend-take-home.fetchrewards.com/form"


/**  API Class 
 * 
 * Static class that utilizes methods to get/send to the API.
 * 
*/

class FetchRewardsApi {

    /** Gets Detail of Occupations and States */
    static async getFetchData(){
        try {
            const response = await axios({url: BASE_URL});
            return response.data; 
        } catch (err){
            console.error(err.message);
        }
        
    }

    /** Sends a post request on form input */
    static async postFetchData(formInput){
        const {name, email, password, occupation, state} = formInput;

        try {
            const response = await axios({
                url: BASE_URL, 
                method: "POST", 
                data: {name, email, password, occupation, state}});

            console.log("successful response!");
            return response;
        } catch(err){
            console.error(err.message);
        }
    }
}


export default FetchRewardsApi; 