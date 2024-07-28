import {Breadcrumb, Card, Container, Row, Col} from 'react-bootstrap';
import FloatLine1 from "../components/charts/FloatLine1.tsx";
import FloatLine2 from "../components/charts/FloatLine2.tsx";
import FloatLine3 from "../components/charts/FloatLine3.tsx";
import FloatLine4 from "../components/charts/FloatLine4.tsx";
import FloatBar1 from "../components/charts/FloatBar1.tsx";
import FloatBar2 from "../components/charts/FloatBar2.tsx";

const FloatChartPage = () => (
    <div className="content-body">
        <Container>
            <Row className="page-titles">
                <Col>
                    <h4>Hello, <span>Welcome here</span></h4>
                </Col>
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Chart</Breadcrumb.Item>
                        <Breadcrumb.Item active>Flot</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Line Chart</Card.Title>
                            <div className="flot-chart">
                                <FloatLine1></FloatLine1>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Line Chart</Card.Title>
                            <div className="flot-chart">
                                <FloatLine2></FloatLine2>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Line Chart</Card.Title>
                            <div className="flot-chart">
                                <FloatLine3></FloatLine3>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Line Chart</Card.Title>
                            <div className="flot-chart">
                                <FloatLine4></FloatLine4>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Bar Chart</Card.Title>
                            <div className="flot-chart">
                                <FloatBar1></FloatBar1>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Bar Chart</Card.Title>
                            <div className="flot-chart">
                                <FloatBar2></FloatBar2>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Area Chart</Card.Title>
                            <div className="flot-chart">

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Area Chart</Card.Title>
                            <div className="flot-chart">

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Realtime Chart</Card.Title>
                            <div className="flot-chart"></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Realtime Chart</Card.Title>
                            <div className="flot-chart"></div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Pie Chart</Card.Title>
                            <div className="flot-chart"></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Pie Chart</Card.Title>
                            <div className="flot-chart"></div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
);

export default FloatChartPage;
