import { AllNavs } from '../Home/AllNavs'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export const Wine = () => {
  const [posts, setCategoryData] = useState();

  const fetchData = () => {

    axios.get("http://localhost:8080/product/findbycatogries/WINE")
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
        <h1 className='text-center'>Wine</h1>
        <div className="container">
          <div className='row'>
            {Array.isArray(posts) && posts.map((post) => (
              <div className="card m-2 col-12 col-sm-6 col-md-4 col-lg-3" key={post.id}>
                <img src={`http://localhost:8080/uploads/${post.image}`} style={{ height: "180px", width: "100%" }} className="card-img-top" alt='beerimage' />
                <div className='card-body'>
                  <p>Name: <b style={{ fontSize: "bold" }}>{post.name}</b></p>
                  <p>Description: <b style={{ fontSize: "larger" }}>{post.description}</b></p>
                  <p>Price: <b style={{ fontSize: "larger" }}>{post.price}</b></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
