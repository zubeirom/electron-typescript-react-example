import React, {useState, useEffect, ChangeEventHandler} from "react";

const App = () => {
    const [file, setFile] = useState<any>(null);
    const [disabled, setDisabled] = useState<boolean>(true)

    const handleChange = (e: any) => {
        setFile(e.target.files[0]);
        setDisabled(false);
    }

    useEffect(() => {
        console.log(file?.path);
    }, [file])
    

	return (
		<div>
			<input type='file' onChange={handleChange} />
            <button disabled={disabled}>Submit</button>
		</div>
	);
};

export default App;
