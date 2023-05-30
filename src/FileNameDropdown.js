import { useState } from "react"

export default function FileNameDropdown(){
    let [fileNameList, setFileNameList] = useState(["A", "B", "C"]);

    var fetchAvailableFileNames = () => {
        fetch("http://127.0.0.1:8080/files/fetchDistinctFileNames", {
            method: "GET"            
        })
        .then(json => json.json())
        .then(data => {
            console.log(data);
            setFileNameList(data);
        })
    }

    return <div style={{
        position: "absolute",
        top: "19vh",
        left: "50vw",
        width: "30vw"
    }}>
        <select style={{
            width: "20vw",
            display: "inline"
        }}>
            {fileNameList.map((filename, index) => (<option key={index}>
                {filename}
            </option>))}
        </select>
        <button onClick={() => fetchAvailableFileNames()}>Refresh</button>
    </div>
}