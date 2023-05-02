import Cookies from 'js-cookie'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import "./swiper.css";
const RouteGuard = ({children}) => {
    const navigate=useNavigate();
    const token = Cookies.get("token");
     if (token) {
       return children;
     } else {
Swal.fire({
  text: "You would need to login!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes,Login!",
}).then((result) => {
  if (result.isConfirmed) {
    navigate("/login");
  }else{
    return navigate("/");
  }
});
     }
 }

export default RouteGuard