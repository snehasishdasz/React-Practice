import { useEffect, useState } from "react";
import Card from "./Card/Card";

function App() {
  const [images, setImages] = useState([]);  // Renamed to images for clarity
  const [isLoading, setIsLoading] = useState(true);  // Fixed typo in isLoading
  const [term, setTerm] = useState("");

  const api = "29116599-a21a7b06895e86841053c6d9e";

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${api}&q=${term}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
    {isLoading ? <h1 className="text-6xl text-center ">Loading....</h1> :
      <div className="grid grid-cols-4 gap-3">
        {images.map((image) => (
          <Card key={image.id} image={image} />  // Added return statement here
        ))}
      </div>
    }
    </div>
  );
}

export default App;
