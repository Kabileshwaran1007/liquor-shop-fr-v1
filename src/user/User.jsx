import React, { useEffect, useState } from 'react'
import { Modal, Table } from 'react-bootstrap'
import axios from 'axios';
import Button from 'react-bootstrap/Button';


export const User = () => {

    //filter by name

    const [text, setText] = useState({
        name: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setText({ ...text, [name]: value })
        // console.log("sadsagd", name, value);

        axios.get(`http://localhost:8080/form/findbyname/${value}`)
        .then((res) => {
            Object.keys(res.data).forEach(key => {
                console.log(key, res.data[key]);
                console.log("===name==" + res.data[key].name);
            })
            // console.log("find name", res);
            // console.log(res.data);
        }).catch((err) => {
            console.log("find error", err);
        })
    }

    //get login details 

    const [posts, SetPosts] = useState();

    const fetchData = () => {
        axios.get("http://localhost:8080/form/getdetails")
            .then((res) => {
                Object.keys(res.data).forEach(key => {
                    // console.log(key, res.data[key]);
                    // console.log("===img==" + res.data[key].image);

                });
                SetPosts(res.data);

                // console.log("===Response==="+res.data.value);

            })
            .catch((err) => {
                console.log("error", err);
            })
    };
    useEffect(() => {
        fetchData();
    }, []);



    //model show

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className='container'>
            <div>
                <br />
                <h3>User</h3>
                <div>View The User List</div>
                <input type="text" id="in" name='name' value={text.name} onChange={handleChange} placeholder='enter a user name' />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>s.no</th>
                        <th>User Name</th>
                        <th>Email Address</th>
                        <th>Password</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(posts) && posts.map((post) => (
                        <tr key={post.id}>
                            <td><b>{post.id}</b></td>
                            <td><b>{post.username}</b></td>
                            <td><b>{post.email}</b></td>
                            <td><b>{post.password}</b></td>
                            <td>
                                <Button variant="primary" onClick={handleShow} className="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                    </svg>
                                </Button>


                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
            {/* model  */}
            <Modal size="sm" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}