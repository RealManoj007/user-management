import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,NavItem,NavbarBrand,Container,Nav} from 'reactstrap'

function Heading() {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href='/'>My Team</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/add">Add User</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Heading
