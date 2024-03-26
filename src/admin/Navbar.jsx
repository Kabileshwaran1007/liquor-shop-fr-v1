import { Nav } from 'react-bootstrap';
import { useState } from 'react';
import { Dashboard } from './Dashboard';
import { Product } from '../Components/Addfiles/Product';
import { User } from '../user/User';


function Navbar() {
    const [activeLink, setActiveLink] = useState("/dashboard");

    const handleSelect = (selectedKey) => {
        setActiveLink(selectedKey);
    };

    return (
        <>
            <Nav fill variant="tabs" activeKey={activeLink} onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link eventKey="/dashboard">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/admin/product">Add Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/user"> User </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/">Log Out</Nav.Link>
                </Nav.Item>
            </Nav>

            {activeLink === '/dashboard' && <Dashboard />}
            {activeLink === '/admin/product' && <Product />}
            {activeLink === '/user' && <User />}
            {/* {activeLink === '/' && <Login />} */}

          
        </>
    );
}

export default Navbar;