import './DrinkPost.css'

function DrinkPost(prop){
    const {drink} = prop;
    return(
        <dic className="drink-post">
            <div className = "drink-post-bg" />
            <div className = "drink-post-content">
                <img src={drink.thumnailUrl} />
                <h4>{drink.title}</h4>
            </div>
        </dic>
    );
}

export default DrinkPost;