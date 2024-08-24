import Logo from '../Images/Logo.png'
import { NavLink } from 'react-router-dom'

function Services() {
  return (
    <section className='w-full  bg-green-100 flex flex-col justify-center text-center'>
      <p className='text-4xl mt-16 text-green-500 font-semibold'>Services</p>

      <p className='py-5 mb-10 px-10'>We now offer online certificate. Thru online you may now request a certificate and deliver it to your home safely and faster. <br /> Note that the cash on delivery will may vary on type of certificate you're requesting because some certificate need a documents requirements.</p>
      
      <div className='flex flex-wrap justify-evenly gap-y-10 my-10'>

        {/* BARANGAY CLEARANCE */}
      <div className='bg-white w-80 h-fit flex flex-col justify-center items-center px-5 py-5 rounded-lg shadow-2xl drop-shadow-2xl transition-transform duration-200 transform hover:scale-105'>
        <img src={Logo} alt="" className='mb-5 h-24 rounded-full' />

        <p className='text-xl text-green-500 font-semibold'>BARANGAY CLEARANCE</p>

        <p className='py-3'>View the requirements needed for Barangay Clearance and acquire online now.</p>
        
        <NavLink to="/barangay-clearance-form" className={"w-full"}>
          <button className='p-2 bg-green-500 text-white w-full transition delay-75 rounded-sm hover:bg-green-400'>Request</button>
        </NavLink>
      </div>

      {/* CERTIFICATE OF RESIDENCY */}
      <div className='bg-white w-80 h-fit flex flex-col justify-center items-center px-5 py-5 rounded-lg shadow-2xl drop-shadow-2xl transition-transform duration-200 transform hover:scale-105'>
        <img src={Logo} alt="" className='mb-5 h-24 rounded-full' />

        <p className='text-xl text-green-500 font-semibold'>CERTIFICATE OF RESIDENCY</p>

        <p className='py-3'>View the requirements needed for Certificate of Residency and acquire online now.</p>

        <NavLink to="/certificate-of-residency-form" className={"w-full"}>
          <button className='p-2 bg-green-500 text-white w-full transition delay-75 rounded-sm hover:bg-green-400'>Request</button>
        </NavLink>
      </div>

        {/* CERTIFICATE OF INDIGENCY */}
        <div className='bg-white w-80 h-fit flex flex-col justify-center items-center px-5 py-5 rounded-lg shadow-2xl drop-shadow-2xl transition-transform duration-200 transform hover:scale-105'>
          <img src={Logo} alt="" className='mb-5 h-24  rounded-full'/>

          <p className='text-xl text-green-500 font-semibold'>CERTIFICATE OF INDIGENCY</p>

          <p className='  py-3'>View the requirements needed for Barangay Clearance and acquire online now.</p>

          <NavLink to="/certificate-of-indigency-form" className={"w-full"}>
            <button className='p-2 bg-green-500 text-white w-full transition delay-75 rounded-sm hover:bg-green-400'>Request</button>
          </NavLink>
        </div>

        {/* CERTIFICATE OF LOW INCOME */}
        <div className='bg-white w-80 h-fit flex flex-col justify-center items-center px-5 py-5 rounded-lg shadow-2xl drop-shadow-2xl transition-transform duration-200 transform hover:scale-105'>
          <img src={Logo} alt="" className='mb-5 h-24  rounded-full'/>

          <p className='text-xl text-green-500 font-semibold'>CERTIFICATE OF LOW INCOME</p>

          <p className='  py-3'>View the requirements needed for Barangay Clearance and acquire online now.</p>

          <NavLink to="/certificate-of-low-income-form" className={"w-full"}>
            <button className='p-2 bg-green-500 text-white w-full transition delay-75 rounded-sm hover:bg-green-400'>Request</button>
          </NavLink>
        </div>

        {/* BUSINESS CLEARANCE */}
        <div className='bg-white w-80 h-fit flex flex-col justify-center items-center px-5 py-5 rounded-lg shadow-2xl drop-shadow-2xl transition-transform duration-200 transform hover:scale-105'>
          <img src={Logo} alt="" className='mb-5 h-24  rounded-full'/>

          <p className='text-xl text-green-500 font-semibold'>BUSINESS CLEARANCE</p>

          <p className='  py-3'>View the requirements needed for Barangay Clearance and acquire online now.</p>

          <NavLink to="business-clearance-form" className={"w-full"}>
            <button className='p-2 bg-green-500 text-white w-full transition delay-75 rounded-sm hover:bg-green-400'>Request</button>
          </NavLink>
        </div>

        {/* CERTIFICATE DEATH */}
        <div className='bg-white w-80 h-fit flex flex-col justify-center items-center px-5 py-5 rounded-lg shadow-2xl drop-shadow-2xl transition-transform duration-200 transform hover:scale-105'>
          <img src={Logo} alt="" className='mb-5 h-24  rounded-full'/>

          <p className='text-xl text-green-500 font-semibold'>CERTIFICATE DEATH</p>

          <p className='  py-3'>View the requirements needed for Barangay Clearance and acquire online now.</p>

          <NavLink to="/certificate-of-death-form" className={"w-full"}>
            <button className='p-2 bg-green-500 text-white w-full transition delay-75 rounded-sm hover:bg-green-400'>Request</button>
          </NavLink>
        </div>

        {/* CERTIFICATE OF NO PROPERTY */}
        <div className='bg-white w-80 h-fit flex flex-col justify-center items-center px-5 py-5 rounded-lg shadow-2xl drop-shadow-2xl transition-transform duration-200 transform hover:scale-105'>
          <img src={Logo} alt="" className='mb-5 h-24  rounded-full'/>

          <p className='text-xl text-green-500 font-semibold'>CERTIFICATE OF NO PROPERTY</p>

          <p className='  py-3'>View the requirements needed for Barangay Clearance and acquire online now.</p>

          <NavLink to="/certificate-of-no-property-form" className={"w-full"}>
            <button className='p-2 bg-green-500 text-white w-full transition delay-75 rounded-sm hover:bg-green-400'>Request</button>
          </NavLink>
        </div>

        {/* CERTIFICATE OF GOOD MORAL CHARACTER */}
        <div className='bg-white w-80 h-fit flex flex-col justify-center items-center px-5 py-5 rounded-lg shadow-2xl drop-shadow-2xl transition-transform duration-200 transform hover:scale-105'>
          <img src={Logo} alt="" className='mb-5 h-24  rounded-full'/>

          <p className='text-xl text-green-500 font-semibold'>CERTIFICATE OF GOOD MORAL CHARACTER</p>

          <p className='  py-3'>View the requirements needed for Barangay Clearance and acquire online now.</p>

          <NavLink to="/certificate-of-good-moral-form" className={"w-full"}>
            <button className='p-2 bg-green-500 text-white w-full transition delay-75 rounded-sm hover:bg-green-400'>Request</button>
          </NavLink>
        </div>

        {/* CERTIFICATE FOR NEW RESIDENTS */}
        <div className='bg-white w-80 h-fit flex flex-col justify-center items-center px-5 py-5 rounded-lg shadow-2xl drop-shadow-2xl transition-transform duration-200 transform hover:scale-105'>
          <img src={Logo} alt="" className='mb-5 h-24  rounded-full'/>

          <p className='text-xl text-green-500 font-semibold'>CERTIFICATE FOR NEW RESIDENTS</p>

          <p className='  py-3'>View the requirements needed for Barangay Clearance and acquire online now.</p>

          <NavLink to="/certificate-for-new-residents-form" className={"w-full"}>
            <button className='p-2 bg-green-500 text-white w-full transition delay-75 rounded-sm hover:bg-green-400'>Request</button>
          </NavLink>
        </div>

        {/* CERTIFICATE FOR SOLO PARENT */}
        <div className='bg-white w-80 h-fit flex flex-col justify-center items-center px-5 py-5 rounded-lg shadow-2xl drop-shadow-2xl transition-transform duration-200 transform hover:scale-105'>
          <img src={Logo} alt="" className='mb-5 h-24  rounded-full'/>

          <p className='text-xl text-green-500 font-semibold'>CERTIFICATE FOR SOLO PARENT</p>

          <p className='  py-3'>View the requirements needed for Barangay Clearance and acquire online now.</p>

          <NavLink to="/certificate-for-solo-parent-form" className={"w-full"}>
            <button className='p-2 bg-green-500 text-white w-full transition delay-75 rounded-sm hover:bg-green-400'>Request</button>
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Services