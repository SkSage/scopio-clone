import { useState } from "react";
import Sidebar from "./Component/Sidebar";
import ImageViewer from "./Component/ImageViewer";
import Image from "./assets/wsi.jpg";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Bone Marrow Aspirate"
  );

  return (
    <div className="app-container">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ImageViewer category={selectedCategory} src={Image}/>
    </div>
  );
}

export default App;
