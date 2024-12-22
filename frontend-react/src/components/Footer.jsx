import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
            <img className="mb-5 w-40" src={assets.logo} alt="logo" />
            <p className="w-full md:w-2/3 text-gray leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius, perferendis cum, impedit aliquid doloribus vel eligendi ea obcaecati, iusto excepturi. Natus sed porro laborum harum aspernatur saepe nam sunt eum, error adipisci fugit delectus quibusdam ea officiis quas veniam facilis illum id velit animi pariatur explicabo assumenda reiciendis tempora.</p>
        </div>

        {/* Middle Section */}
        <div>
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* Right Section */}
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>+91-987654321</li>
                <li>support@prescripto.com</li>
                <li></li>
                <li></li>
            </ul>
        </div>
      </div>

      {/* Copyright Text Section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024 @ Prescripto - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
