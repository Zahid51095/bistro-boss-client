
const FoodCard = ({item}) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} /></figure>
        <p className=" absolute right-0 mr-4 mt-4 bg-yellow-900 px-4 text-white">$ {price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;