import { useState } from "react";
import "./fetchRForm.css";

const initialState = {
    name: "",
    email:"",
    password: "",
    occupation: "",
    state: ""
}

/** Fetch Reward Form 
 * 
 * Props: occupations (array), states (array), postFetchReward (fn)
 * State: formData (obj), isCompleted (boolean)
 * 
 * App -> FetchRewardsForm
 * 
*/

function FetchRewardsForm({occupations, states, postFetchReward}){
    const [formData, setFormData] = useState(initialState);
    const [isCompleted, setIsCompleted] = useState(false);

    console.debug(
        "formData=", formData,
        "isCompleted", isCompleted
    )
  
    /** Handle form data changing */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData((formData) => ({ ...formData, [name]: value.trim() }));
      }

    /** Handle submit  
     * - attempt to submit and make a post request
     * - if successful 
     *      - reset formData
     *      - setIsCompleted to true
     * - else throw error
    */ 

    async function handleSubmit(evt){
        evt.preventDefault();

        try{
            await postFetchReward(formData);
            setFormData(initialState);
            setIsCompleted(true);
        } catch(err) {
            console.error(err);
        }

    }

    // Have all values been filled out
    let notCompleted = (Object
        .values(formData)
        .filter(data => data.trim() !== "").length < 5)


    return (
        <section className="col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4">
            <div className="FetchRewardsForm card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                            name="password"
                            type="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Occupation</label>
                            <select name="occupation"
                            className="form-control"
                            value={formData.occupation}
                            onChange={handleChange}
                            >
                            {occupations.map(occupation => (
                                <option 
                                    key={occupation.toLowerCase()}>
                                    {occupation}
                                </option>
                            ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">State</label>
                            <select name="state"
                            className="form-control"
                            value={formData.state}
                            onChange={handleChange}
                            >
                            {states.map(state => (
                                <option 
                                    key={state.abbreviation}>
                                    {state.name} {state.abbreviation}
                                </option>
                            ))}
                            </select>
                        </div>

                        {isCompleted && <p className="text-center alert alert-success">Form Submitted!</p>}
                        <button 
                            disabled={notCompleted} 
                            className="btn btn-success"> Submit! 
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )

}


export default FetchRewardsForm; 