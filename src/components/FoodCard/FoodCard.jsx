import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";



const FoodCard = ({item}) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();


  const handleAddToCart = food =>{
    if(user && user.email){
     console.log(user.email, food);
     const cartItem = {
        menuId: _id,
        email: user.emal,
        name,
        image,
        price
     }
     axiosSecure.post('/carts', cartItem)
     .then(res => {
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to your cart`,
          showConfirmButton: false,
          timer: 1500
        });
      }
     })
    }
    else{
      Swal.fire({
        title: "You are not logged In.",
        text: "Please login to add food to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      });
    }
  }
   
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} /></figure>
        <p className=" absolute right-0 mr-4 mt-4 bg-yellow-900 px-4 text-white">$ {price}</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;