import { useState } from "react";
import './Product.css'


export const Product = () => {
    const [data, setData] = useState({
        valName: "",
        valPrice: "",
        valDescription: "",

    });
    const [selectedImage, setSelectedImage] = useState(null);
    let uploadImage=null;
    const [selectedValue, setSelectedValue] = useState();
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
    const dataGiven = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const submitProduct = () => {
        const product = {
            name: data.valName,
            price: data.valPrice,
            description: data.valDescription,
            categories:selectedValue,
            image:uploadImage
        }
        fetch("http://localhost:8080/product/set", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "post",
            body: JSON.stringify(product)
        }).then(response => {
            console.log("Data Received " + response)
        })

    }
    const handleFile = () => {
        console.log("hello world")
        const formData = new FormData();
        formData.append("file", selectedImage);
    
        fetch("http://localhost:8080/file/upload", {
            method: 'POST',
            body: formData,
            dataType: "jsonp"
        })
        .then(response => response.text())
        .then(text => {
            uploadImage=text;
            console.log(text)
        })
      }
    return (
        <div className="form-container">
            <h1>Add a Product</h1>
            <label>Name:</label>
            <input type="text" name="valName" value={data.value} onChange={dataGiven} />
            <br />
            <label>Description:</label>
            <input type="text" name="valDescription" value={data.value} onChange={dataGiven} />
            <br />
            <label>Price:</label>
            <input type="text" name="valPrice" value={data.value} onChange={dataGiven} />
            <br />
            <label>Categories:
                <select value={selectedValue} onChange={handleChange}>
                    <option>Categorie</option>
                    <option>BEER</option>
                    <option>WINE</option>
                    <option>SPIRITS</option>
                </select>
            </label>
            {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
          <button onClick={()=> handleFile()}>Upload</button>
        </div>
      )}
      <br />
      <br />
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />            <br />
            <input type="button" onClick={() => submitProduct()} value={"Submit"} />
        </div>
    );
}

