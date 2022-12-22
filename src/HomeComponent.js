import ShowItems from "./ShowItems";
import './HomeComponent.css';

function HomeComponent(){

    const folders=["New folder","New folder 1","Jam","Tom"];
    const files=["New file.txt","new folder 2.pdf","book tree.pdf","lost.txt"];
    return <div className="column">
    <ShowItems title={"Created Folders"} items={folders}/>
    <ShowItems title={"Created Files"} items={files}/>
    </div>
    
}
export default HomeComponent;