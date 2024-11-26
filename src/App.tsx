import ListGroup from './comp/ListGroup';
import DropDown from './comp/dropdown';
import Text from './comp/text';
import './app.css';
function App() {
  return (
    <div className="page-background">
      <Text
        size="large"
        weight="bold"
        color="white"
        className="h1"
        fontFamily="Courier New"
      >
        Welcome To Evan-Sphere
      </Text>
    </div>
  );
}

export default App;