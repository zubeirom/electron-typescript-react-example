import React, {useState, useEffect, ChangeEventHandler} from "react";

const App = () => {
    const [file, setFile] = useState<any>(null);

    const handleChange = (e: any) => {
        setFile(e.target.files[0])
    }

    useEffect(() => {
        console.log(file?.path);
    }, [file])
    

	return (
		<div>
			<input type='file' onChange={handleChange} />
		</div>
	);
};

export default App;
