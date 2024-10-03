import Link from "next/link"

function header(){
    return(
        <div>
            <nav className="bg-orange-400 flex justify-between">
      <img src="https://static.vecteezy.com/system/resources/previews/003/690/403/original/food-delivery-online-on-phone-orange-background-illustration-fastfood-design-concept-business-shop-promotion-transport-to-home-free-vector.jpg" className="w-16" alt="logo" />
        <ul className="px-28 py-4 flex space-x-11 justify-end">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/Resturants">Resturants List</a></li>
          <li><a href="/contact-us">Contact us</a></li>
        </ul>
      </nav>
        </div>
    )
}
export default header