import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
             <Link style={{textDecoration: 'none',marginLeft:"40%"}} to="/"><Navbar.Brand>
             Dictionary Word Finder
                </Navbar.Brand></Link>
            </Container>
        </Navbar>
    );
};

export default Header;