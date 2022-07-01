import './DrinkItems.css'

function DrinkItems(props){
    const { drink } = props;
    return(
        <div className='drink-item'>
            <img src={drink.thumnailUrl} />
            <h4>{drink.title}</h4>
        </div>
    );
}

export default DrinkItems;