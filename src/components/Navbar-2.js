
import { Link } from 'react-router-dom';




const Navbar2 = () => {
 

  return (
    
      <nav className="bg-gray-200 w-full py-8 px-8 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <Link to="/" className="text-black text-2xl font-bold">Logo</Link>
          </div>
          <ul className="flex space-x-8">
            <li className="nav-item">
              <Link to="/" className="text-black text-xl hover:text-gray-600">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="text-black text-xl hover:text-gray-600">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="text-black text-xl hover:text-gray-600">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="text-black text-xl hover:text-gray-600">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="text-black text-xl hover:text-gray-600">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      
    
  );
};

export default Navbar2;


 
