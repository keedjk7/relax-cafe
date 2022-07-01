import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import DrinkItems from './components/DrinkItems';
import DrinkPost from './components/DrinkPost';
import drinks from './datas/drinks';

function App() {
    const [selectedDrink,setSelectedDrink] = useState(null);

    function onDrinkOpenClikc(theDrink){
        setSelectedDrink(theDrink);
    }

    const drinkElements = drinks.map((drink, index) => {
        return <DrinkItems key={index} drink={drink} />
    });

    let drinkPost = null;
    if(!!selectedDrink){
        drinkPost = <DrinkPost drink = {selectedDrink}/>
    }

    return (
        <div className="App">
            <AppHeader />
            <button onClick = {()=>{onDrinkOpenClikc(drinks[2]);}}>Open</button>
            <div className="picture-grid">
                {drinkElements}
            </div>
            {drinkPost}
        </div>
  );
}

export default App;
