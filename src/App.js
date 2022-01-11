import { useState, useEffect } from 'react';
import './App.css';
import FetchRewardsForm from "./fetchRForm";
import FetchRewardsApi from './fetchRApi';


/** App Main Application 
 * 
 * Props: (none)
 *  State:
 * - selectOptions: data objs -- populated via AJAX call
 *      - occupations: list of strings
 *      - states: list of objs 
 *                { name: "Illinois",
 *                  abbreviation: "IL"
 *                }
 * - isLoading: boolean
 * 
 * App -> FetchRewardsForm
 */

function App() {
  const [selectOptions, setSelectOptions] = useState({
    occupations: [],
    states: []
  }); 

  const [isLoading, setIsLoading] = useState(true);


  /** Load data from API */

  useEffect(function () {
    async function renderFetchRewardsData() {
      const fetchData = await FetchRewardsApi.getFetchData();

      const occupations = fetchData.occupations;
      const states = fetchData.states; 

      setSelectOptions({occupations, states});
      setIsLoading(false);
    }

    renderFetchRewardsData()
  },[]);

   /** Call API to add form data */
   
  async function postFetchReward(formData){
    await FetchRewardsApi.postFetchData(formData);
  }

  const { occupations, states } = selectOptions; 

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h3 className="FetchHeading">Fetch Rewards Form Submission</h3>
      <FetchRewardsForm
        occupations={occupations} 
        states={states} 
        postFetchReward={postFetchReward}/>
    </div>
  );
}

export default App;
