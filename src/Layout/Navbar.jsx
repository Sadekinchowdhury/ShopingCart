import { BsFillCartFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='h-14  rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900 w-10/12 mx-auto'>
        <h1 className='flex-1'>ShopingCart</h1>
        <li>
          <Link to='/'>Home</Link>
        </li>
       
        <li title='cart' className='bg-indigo-500 p-2 rounded-full'>
          <Link to='/cart'>
            <BsFillCartFill className='text-white ' />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
