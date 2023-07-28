import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {

  return (
    <Container style={{marginTop:"90px"}}>
      <Row className="my-4">
        <Col>
          <h1>Notifications en temps réel avec React.js et WebSocket</h1>
          <p>
            Bienvenue sur notre exemple de page d'accueil pour les notifications en temps réel !
            Ici, nous démontrons comment utiliser les WebSockets pour recevoir des notifications
            en temps réel et les afficher à l'aide de React.js et React Bootstrap.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
