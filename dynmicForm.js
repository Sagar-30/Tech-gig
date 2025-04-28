//The configuration should define the field type (text, number, select, etc.)
// And any associated properties (label, placeholder, options).
import React, { useEffect, useState, Fragment } from "react"
export default function DynamicForm() {
    const [formInput, Setforminput] = useState();
    const [LabelInput, SetLabelInput] = useState();
    const [selectOptions, setSelectOptions] = useState();
    const [currTime, setCurrTime] = useState();
    const [data, setData] = useState([]);

    function handleFormAdd() {
        let selectOpt = null;
        if (selectOptions) {
            let selectOptArr = selectOptions.split(",");
            let arrObj = Object.assign({},selectOptArr);
            let selectOpt = JSON.stringify(arrObj);
            console.log(selectOpt);
        }
        let inputData = {
            "formType": formInput,
            "label": LabelInput,
            "unique": `${LabelInput}+${currTime}`,
            "options": selectOpt
        }
        setData([...data, inputData])
        console.log("Options", selectOptions);
    }

    useEffect(() => {
        let current = new Date().toLocaleTimeString();
        setInterval(() => {
            setCurrTime(current);
        }, [1000]);
    }, [currTime]);
    return (
        <div>
            <input type="text" onChange={(e) => Setforminput(e.target.value.toLowerCase())} placeholder="type" /><br />
            {formInput === "select" && <input style={{ display: "inline-block" }} type="text" onChange={(e) => setSelectOptions(e.target.value)} placeholder="Options seperated by comma" />}<br />
            <input type="text" onChange={(e) => SetLabelInput(e.target.value)} placeholder="label" />
            <button onClick={handleFormAdd}>Add</button>

            <div>
                <p>Form:</p><br />
                <form>
                    {data && data.map((el) => (
                        <>
                        {
                            el.formType === "select" ?
                                <select key={el.unique}>
                                    {el.options.forEach((opt)=>(
                                    
                                        <option key={`${opt}+${currTime}`}>{opt}</option>
                                        
                                    ))}
                                </select>
                                :
                                <Fragment key={el.unique}>
                                    <label for={el.unique}>{el.label}</label>
                                    <input type={el.formType} id={el.unique} />
                                </Fragment>
                        }
                        </>
                    ))}
                </form>
            </div>
        </div>
    )
}