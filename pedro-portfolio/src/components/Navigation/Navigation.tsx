import Link from 'next/link';
import styles from './Navigation.module.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


const Navigation = () => {
    return (
        <Navbar className='p-1 d-flex justify-content-between border border-botom border-black' expand='lg'>
            <div className='bg-transparent ms-5 d-flex flex-column justify-content-center align-items-start'>
                <Link href='./' className='text-decoration-none'>
                    <Navbar.Brand className=' bg-transparent'>Pedro Suárez Gallardo</Navbar.Brand>
                    <p className='bg-transparent text-decoration-none'>Front-End Dev</p>
                </Link>
            </div>
            <div className='me-5'>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className={styles['nav-link']}>About</Nav.Link>
                        <Nav.Link href="#link" className={styles['nav-link']}>Projects</Nav.Link>
                        <Nav.Link href="#link" className={styles['nav-link']}>Contact</Nav.Link>
                    </Nav>
                    <Nav className='ml-auto'>
                        <NavDropdown title='Lenguage' id='basic-nav-dropdown'>
                            <NavDropdown.Item href='#action/3.1'>Spanish</NavDropdown.Item>
                            <NavDropdown.Item href='#action/3.2'>English</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>

        </Navbar>
    );
}


export default Navigation;