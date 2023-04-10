import Image from 'next/image'
import ProfileImage from '../../public/images/Pedro_Suarez_Photo.png'
import styles from '@/styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {

    return (
        <>
            <Layout title={'PedroSG00 - Home'}>
                <section className={`${styles.firstSection}`}>
                    <Container className='bg-transparent p-5'>
                        <div className={styles.bgSemiTransparent}>
                            <h1 className={styles.nameText}>Pedro Suárez Gallardo</h1>
                            <p className='fs-1 bg-transparent text-center'>Front-End Dev</p>
                        </div>
                        <Row className='bg-transparent justify-content-center align-items-center'>
                            <Col className='bg-transparent d-flex justify-content-center p-4' sm={10} md={10} lg={5} >
                                <Image
                                    width={300}
                                    src={ProfileImage}
                                    alt='Pedro Image'
                                    className={`${styles.roundedImage} bg-transparent`}
                                />
                            </Col>
                            <Col className={`${styles.bgSemiTransparent} mt-3 text-center fs-5 p-3 d-flex align-items-center`} sm={10} md={5} lg={5}>
                                <p className='bg-transparent'>
                                    I am Web Developer with a lot
                                    of atenttion to detail and high
                                    tolerance for hectic work
                                    rhythms.
                                    Currently, I am working as Front-End Developer in OCM Software Solutions,
                                    after completing the Web
                                    Development Bootcamp at
                                    Ironhack Madrid.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </section >
            </Layout >
        </>
    )

}
