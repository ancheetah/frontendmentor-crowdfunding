// import logo from './logo.svg';
import './App.css';
import { Container, Jumbotron, Card, CardTitle, CardBody, Button } from 'reactstrap';

import Header from './components/HeaderComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <Card class="project-info">
          <CardTitle>Mastercraft Bamboo Monitor Riser</CardTitle>
          <CardBody>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</CardBody>
          <Button>Back this project</Button>
        </Card>
        <Jumbotron>
          <h1 class="display-1">$89,914</h1>
          <p>of $100,000 backed</p>
          <hr></hr>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
