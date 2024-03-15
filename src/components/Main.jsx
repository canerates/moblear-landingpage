import { Container, Row, Col, Button } from 'reactstrap';
import imageHorizontal from '../assets/home-min.png'
import imageVertical from '../assets/home2-min.png';

const Main = () => {
    return(
        <section id='main'>
            <Container>
                <Row className='row-center'>
                    <Col lg='8' md='8' sm='12' xs='12' className='section-padding-top'>
                        <img src={imageVertical} alt="" className='image-vertical'/>
                        <img src={imageHorizontal} alt="" className='image-horizontal'/>
                    </Col>
                    <Col lg='4' md='4' sm='12' xs='12' className='main-description col-pb-30'>
                        <Row>
                            <h1><span>Design</span></h1>
                        </Row>
                        <Row>
                            <h1>with your models</h1>
                        </Row>
                        <Row>
                            <p className='details'>Moble AR allows you to upload your own USDZ models and use them to design your real world environment.</p>
                        </Row>

                        <Row >
                            <Col>
                                <Button target='_blank' rel='noopener noreferrer' href='https://testflight.apple.com/join/IK7rzLiG' className='cv-btn mr-20'>Download</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default Main;