export default function FileUploadForm(){


    var handleFormSubmit = () => {
        var reader = new FileReader();
        reader.readAsDataURL(document.querySelector("#uploadedFile").files[0]);
        reader.onload = (file) => {
            uploadFileToServer(file.target.result);
        }
        reader.onerror = (error) => {
            console.log(error);
        }
    }

    var uploadFileToServer = (fileData) => {
        fetch("http://127.0.0.1:8080/files/upload", {
            method: "POST",
            body: JSON.stringify({
                fileName: document.querySelector("#fileName").value,
                data: fileData
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "username": "Anubhav Sharma"
            }
        })
            .then(json => json.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    return (<div style={{
        position: "absolute",
        top: "5vh",
        left: "10vw",
        border: "1px solid grey",
        borderRadius: "5px",
        padding: "10px 20px 20px 10px"
    }}>
        <div>
          <table>
            <tbody>
                <tr>
                    <td>Choose your file</td><td><input id="uploadedFile" type='file'></input></td>
                </tr>
                <tr>
                    <td>File Name</td><td><input id="fileName" type='text'></input></td>
                </tr>
                <tr>
                    <td><input type='reset' style={{width: "100%"}}></input></td><td><input type='submit' onClick={() => handleFormSubmit()} style={{width: "40%"}}></input></td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>);
}