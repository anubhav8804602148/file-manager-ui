import './App.css';
import FileUploadForm from './FileUploadForm';
import FileViewer from './FileViewer';
import FileNameDropdown from './FileNameDropdown';


function App() {
  return (
    <div>
      <FileUploadForm></FileUploadForm>
      <FileNameDropdown></FileNameDropdown>
      <FileViewer></FileViewer>
    </div>
  );
}

export default App;
