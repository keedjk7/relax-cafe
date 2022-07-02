import './DrinkItems.css'

function DrinkItems(props){
    const { drink , onDrinkClick} = props;
    return(
        <div className='drink-item'>
            <img src={drink.thumnailUrl} onClick = {()=>{onDrinkClick(drink)} } />
            <h4>{drink.title}</h4>
        </div>
    );
}

export default DrinkItems;