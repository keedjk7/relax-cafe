import './App.css';
import AppHeader from './components/AppHeader';
import DrinkItems from './components/DrinkItems';
import DrinkPost from './components/DrinkPost';
import drinks from './datas/drinks';

function App() {
    const drinkElements = drinks.map((drink, index) => {
        return <DrinkItems key={index} drink={drink} />
    });
    return (
        <div className="App">
            <AppHeader />
            <div className="picture-grid">
                {drinkElements}
            </div>
        </div>
  );
}

export default App;
