import './DrinkPost.css'

function DrinkPost(prop){
    const {drink , onBgClick } = prop;
    return(
        <dic className="drink-post">
            <div className = "drink-post-bg" onClick={onBgClick} />
            <div className = "drink-post-content">
                <img src={drink.thumnailUrl} />
                <h4>{drink.title}</h4>
            </div>
        </dic>
    );
}

export default DrinkPost;