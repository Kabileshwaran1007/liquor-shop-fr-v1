import React, { useState } from 'react';
import axios from 'axios';
import './Product.css';

export const Product = () => {
    const [data, setData] = useState({
        valName: "",
        valPrice: "",
        valDescription: "",
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedValue, setSelectedValue] = useState("Categorie"); // Set default value

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const dataGiven = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const submitProduct = () => {
        const formData = new FormData();
        formData.append("name", data.valName);
        formData.append("price", data.valPrice);
        formData.append("description", data.valDescription);
        formData.append("category", selectedValue);
        formData.append("image", selectedImage);

        axios.post("http://localhost:8080/product/insert", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log("Response:", response.data);
            alert("Product added successfully");
            // Clear form data and selected image after successful submission
            setData({
                valName: "",
                valPrice: "",
                valDescription: "",
            });
            setSelectedValue("Categorie");
            setSelectedImage(null);
        })
        .catch(error => {
            console.log("Error:", error);
            alert("Error adding product");
            // Handle error
        });
    };

    return (
        <div className="form-container">
            <h1>Add a Product</h1>
            <label>Name:</label>
            <input type="text" name="valName" value={data.valName} onChange={dataGiven} />
            <br />
            <label>Description:</label>
            <input type="text" name="valDescription" value={data.valDescription} onChange={dataGiven} />
            <br />
            <label>Price:</label>
            <input type="text" name="valPrice" value={data.valPrice} onChange={dataGiven} />
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
                </div>
            )}
            <br />
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                }}
            />
            <br />
            <input type="button" onClick={() => submitProduct()} value={"Submit"} />
        </div>
    );
}
