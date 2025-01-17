
import { useContext } from "react"
import "./index.scss"
import { PlaygroundContext } from "../../../Providers/PlaygroundProvider"

const Folder = ({folderTitle, cards}) => {
   return <div className="folder-container">
   <div className="folder-header">
       <div className="folder-header-item">
           <span className="material-icons" style={{color: "#FFCA29"}}>folder</span>
           <span>{folderTitle}</span>
       </div>
       <div className="folder-header-item">
           <span className="material-icons">delete</span>
           <span className="material-icons">edit</span>
           <button>
           <span className="material-icons">add</span>
           <span>New Playground</span>
           </button>
       </div>
   </div>
   <div className="cards-container">
      {
         cards?.map((file, index) => {
           return (
            <div className="card" key={index}>
            <img src="logo.png" />
            <div className="title-container"> 
                <span>{file?.title}</span>
                <span>Language: {file?.language}</span>
            </div>
            <div style={{display:'flex', gap:'10px'}}>
            <span className="material-icons">delete</span>
            <span className="material-icons">edit</span>
            </div>
          </div>
           );
         })
      }
   </div>
   </div>
}

export const RightComponent = () => {

  const {folders}=useContext(PlaygroundContext);
  

  return <div className="right-container">
      <div className="header">
          <div className="title"><span>My</span> Playground</div>
          <button className="add-folder">
            <span className="material-icons">add</span>
            <span>New Folder</span>
          </button>
      </div>
      {
         folders?.map((folder,index) => {
          return <Folder folderTitle={folder?.title} cards={folder?.files} key={index}/>
         })
      }
      
</div>
}