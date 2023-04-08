import { Container } from "react-bootstrap";

const Footer = () => {

    const currentYear: number = new Date().getFullYear()

    return (
        <footer className="py-3">
            <Container>
                <p className="text-center m-0">
                    © {currentYear} Pedro Suárez Gallardo. All rights reserved.
                </p>
            </Container>
        </footer>
    )
}

export default Footer;
