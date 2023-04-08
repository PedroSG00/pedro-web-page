import Image from 'next/image'
import ProfileImage from '../../public/images/Pedro_Suarez_Photo.jpeg'
import styles from '@/styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import { Container, Row, Col } from 'react-bootstrap'

export default function Home() {

    return (
        <>
            <Layout title={'PedroSG00 - Home'}>
                <section className={`${styles.firstSection}`}>
                    <Container className='bg-transparent p-5'>
                        <Row className='bg-transparent'>
                            <Col className='bg-transparent' md={{ span: 6, offset: 3 }} >
                                <div className='bg-transparent d-flex justify-content-evenly align-items-center flex-wrap'>
                                    <Image
                                        width={300}
                                        height={400}
                                        src={ProfileImage}
                                        alt='Pedro Image'
                                        className={`${styles.roundedImage}`}
                                    />
                                    <h1 className='bg-transparent'>Who am i?</h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout >
        </>
    )

}
