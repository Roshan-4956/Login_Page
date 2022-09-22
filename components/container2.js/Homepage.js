import LeftSide from './leftside/LeftSide';
import RightSide from './rightside/RightSide';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from "./homepage.module.css";
export default function Homepage() {
    return (
        <Container>
            <Row>
                <Col >
                    <div className={classes.navbar}>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={4} className={classes.col1}>
                    <LeftSide />
                </Col>
                <Col xs={2} className={classes.col2}>
                </Col>
                <Col xs={6} className={classes.col1}>
                    <RightSide />
                </Col>
            </Row>
        </Container>
    )
}
