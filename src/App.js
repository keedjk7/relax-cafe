import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import DrinkItems from './components/DrinkItems';
import DrinkPost from './components/DrinkPost';
import drinks from './datas/drinks';

function App() {
    const [selectedDrink,setSelectedDrink] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onDrinkOpenClick(theDrink){
        setSelectedDrink(theDrink);
    }

    function onDrinkCloseClick(){
        setSelectedDrink(null);
    }

    const filteredDrinks = drinks.filter((drink) => {
        return drink.title.includes(searchText);
    });

    const drinkElements = filteredDrinks.map((drink, index) => {
        return <DrinkItems key={index} drink={drink} onDrinkClick={onDrinkOpenClick} />
    });

    let drinkPost = null;
    if(!!selectedDrink){
        drinkPost = <DrinkPost drink = {selectedDrink} onBgClick={onDrinkCloseClick} />
    }

    return (
        <div className="App">
            <AppHeader />
            <section className='app-section'>
                <div className='app-container'>
                    <AppSearch value={searchText} onValueChange = {setSearchText} />
                    <div className="picture-grid">
                    {drinkElements}
                    </div>
                </div>
            </section>
            {drinkPost}
        </div>
  );
}

export default App;
