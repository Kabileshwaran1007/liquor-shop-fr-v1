import { AllNavs } from '../Home/AllNavs'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export const Wine = () => {
  const [posts, setCategoryData] = useState();

  const fetchData = () => {

    axios.get("http://localhost:8080/product/WINE")
      .then((res) => {
        Object.keys(res.data).forEach(key => {
          console.log(key, res.data[key]);
          console.log("===img==" + res.data[key].song);
          setCategoryData(res.data);
        });

        setCategoryData(res.data);
      }).catch((err) => {
        console.log("error", err);
      })
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div >
      <AllNavs />
      <div>
        <div className="container">
          <div className='row'>
            {Array.isArray(posts) && posts.map((post) => (
              <div className="card m-2 col-12 col-sm-6 col-md-4 col-lg-3 border-0 shadow rounded" style={{ maxWidth: "269px", height: "550px" }} key={post.id}>
                <img src={`http://localhost:8080/uploads/${post.image}`} style={{ height: "250px", objectFit: "cover" }} className="card-img-top rounded-top" alt='beerimage' />
                <div className='card-body d-flex flex-column justify-content-between'>
                  <div>
                    <h5 className="card-title mb-3">{post.name}</h5>
                    <p className="card-text">{post.description}</p>
                  </div>
                  <div>
                    <p className="card-text"><small className="text-muted">Price: ${post.price}</small></p>
                    {/* <button className="btn btn-primary">Add to Cart</button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
