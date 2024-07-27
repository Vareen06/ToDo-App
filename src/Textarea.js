import React,{useState} from 'react'

function Textarea() {

    const [state,setState]=useState("");
    const [tableData,setTableData]=useState([]);
    const [update,setUpdate]=useState({isupdate:false, index:null});

    const handleInputChange = (event) => {
        setState(event.target.value);
    };

    const addItem = (index) => {
        if(update.isupdate){
            if (state.trim()) { 
                const updatedTableData = [...tableData];
                updatedTableData.splice(update.index,1,state);
                setTableData(updatedTableData);
                setState('');
                setUpdate({
                    isupdate:false,
                    index:null
                });
                }
        }
        else if (state.trim()) { // Ensure input is not empty
            setTableData([...tableData, state]);
            setState(''); // Clear the input after adding
        }
    };
    const deleteItem = (index) => {
        setTableData(tableData.filter((item, i) => i !== index));
        setState('');
    };

    const updateItem=(index,item)=>{
        setUpdate({
            isupdate:true,
            index:index
        });
        
        // setState(tableData.filter((item,i)=> i===index));
        setState(item);
    
    }
        
    
  return (
    <div className='flex justify-evenly'>
        <h1>TO Do:</h1>
        <input className='border-2' type='text' value={state} 
        onChange={handleInputChange} placeholder='Enter the text' ></input>
        <button className='bg-green-600 rounded-2xl text-white border-2 w-1/6 h-50' type='button' id='add' onClick={()=>addItem()} >{update.isupdate?"update text":"Add Text"}</button>
        <br/>
        <table id='table'>
            <tr>
                <td>Items</td>
            </tr>
            <tbody>
                {tableData.map((item, index) => (
                <tr key={index}>
                    <td>{item}</td>
                    <td>
                        <button className=' bg-blue-320 rounded-2xl  border-2 mx-2'type='button' onClick={() => deleteItem(index)}>Delete</button>
                    </td>
                    <td>
                        <button className='bg-yellow-320 rounded-2xl border-2  h-50 mx-2 '  type='button'  disabled={update.index===index}
                        onClick={() => updateItem(index,item)}>Update Item</button>
                    </td>
                </tr>
            ))}
        </tbody>
        </table>
        <script src="https://cdn.tailwindcss.com"></script>
    </div>
  )
}

export default Textarea