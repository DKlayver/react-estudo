import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
function App() {

  const nome = 'Juliana'

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName  nome = 'Davi'/>
      <SayMyName  nome = {nome}/>
      <Pessoa 
       nome="Davi"
       idade= "19"
       profissao= "Programador"
       foto="https://via,placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;
