import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className=" text-black py-6 bg-green-100">
      <div className="container mx-auto w-full px-2">
        <div>

          <div className="flex justify-center gap-[5%] mt-3 flex-wrap basis-52 grow">

            <div className="w-52 text-center">
              <p className="mb-3 mt-5 font-bold text-xl text-green-500">Quick Links</p>

              <ul className="text-gray-600">
                <li><HashLink to={"/#about"}>About</HashLink></li>
                <li><HashLink to={"/#services"}>Services</HashLink></li>
                <li><HashLink to={"/#track-request"}>Track Request</HashLink></li>
                <li><HashLink to={"/#location"}>Location</HashLink></li>
              </ul>
            </div>

            <div className="w-52 text-center">
              <p className="mb-3 mt-5 font-bold text-xl text-green-500">Our Community</p>

              <ul className="text-gray-600">
                <li>
                  <Link to={"https://www.google.com/maps/place/Balon+Anito+Barangay+Hall,+National+Rd,+Mariveles,+Bataan/@14.4363712,120.4696933,17z/data=!3m1!4b1!4m6!3m5!1s0x3396192d3c682871:0x801a23e613c67725!8m2!3d14.4363745!4d120.4722831!16s%2Fg%2F11bvt9xf0y?authuser=0&entry=ttu"}>
                    Location - Barangay Balon, Anito, Mariveles, Bataan
                  </Link>
                </li>

              </ul>
            </div>

            <div className="w-52 text-center">
              <p className="mb-3 mt-5 font-bold text-xl text-green-500">Contact Us</p>

              <ul className="text-gray-600">
                <li>No: 09101010101</li>
                <li><Link to={"/"}>Email Address: brgybalonanito@gmail.com</Link></li>
              </ul>
            </div>

            <div className="w-52 text-center">
              <p className="mb-3 mt-5 font-bold text-xl text-green-500">Social Media Links</p>

              <ul className="text-2xl flex justify-evenly">
                <li><Link to={"https://www.facebook.com/kabataanngBalonAnito"}><FaFacebookSquare /></Link></li>
                <li><Link to={"/"}><SiGmail /></Link></li>
                <li><Link to={"/"}><FaInstagramSquare /></Link></li>
                <li><Link to={"/"}><FaTwitterSquare /></Link></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="text-center text-lg flex justify-center items-center py-3 w-full mt-10">
        <p><strong>&copy;</strong>2024 <strong>Balon Anito</strong> | All rights reserved.</p>
      </div>
    </footer>
  )
}
