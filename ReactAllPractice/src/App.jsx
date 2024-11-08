import { useEffect, useState } from "react";
import Card from "./Card/Card";
import ImageSearch from "./Card/ImageSearch";

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState(""); // This term will be set from ImageSearch input

    const api = "29116599-a21a7b06895e86841053c6d9e";

    useEffect(() => {
        if (term) {  // Only fetch images if there's a term
            setIsLoading(true);
            fetch(`https://pixabay.com/api/?key=${api}&q=${term}&image_type=photo&pretty=true`)
                .then((res) => res.json())
                .then((data) => {
                    setImages(data.hits);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        }
    }, [term]);

    const handleSearchSubmit = (searchTerm) => {
        setTerm(searchTerm);  // Set the search term from ImageSearch
    };

    return (
        <div className="container mx-auto">
            <ImageSearch onSearchSubmit={handleSearchSubmit} />
            {isLoading ? <h1 className="text-6xl text-center ">Loading....</h1> :
                <div className="grid grid-cols-4 gap-3">
                    {images.map((image) => (
                        <Card key={image.id} image={image} />
                    ))}
                </div>
            }
        </div>
    );
}

export default App;
