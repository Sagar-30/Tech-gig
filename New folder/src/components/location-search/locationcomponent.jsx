import {Search} from 'react-bootstrap-icons'
import {useState} from 'react';
import './locationcomponent.css'
export default function Location(){
    const [start , setstart] = useState();
    const [end , setend] = useState();
    function Handlestart(e){
        setstart(e.target.value);
    }
    function HandleEnd(e){
        setend(e.target.value);
    }
    function handleSearch(){
        if(start>end){
            alert('Start date must be before End date')
        }
    }
    return(
        <section className="location-top-section">
            <div className="location-left-div">
                 <div className="location-left-div-text">
                    <p>Quick Search</p>
                 </div>
                 <div className="location-left-div-cities" >
                    <dl>
                        <dt>Your Location</dt>
                    <dd>
                    <select name="city" id="city">
                        <option value="">Select</option>
                        <option value="Faridabad">Faridabad</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Ghaziabad">Ghaziabad</option>
                        <option value="Noida">Noida</option>
                        <option value="Jammu">Jammu</option>
                    </select>
                    </dd>
                    </dl>
                    </div>
                    <div className="location-left-div-start-date">
                        <dl>
                            <dt>Start Date</dt>
                            <dd><input type="date" name="Start" id="Start" onBlur={Handlestart} /></dd>
                        </dl>
                    </div>
                    <div className="location-left-div-end-date">
                        <dl>
                            <dt>End Date</dt>
                            <dd><input type="date" name="End" id="End" onBlur={HandleEnd} /></dd>
                        </dl>
                    </div>
                 
            </div>
             <span onClick={handleSearch}>{<Search style={{ width: '50px', height: '2rem' }} />}</span>

        </section>
    )
}