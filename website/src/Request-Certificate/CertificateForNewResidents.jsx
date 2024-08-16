import React, { useState, useEffect } from 'react';
import Logo from '../Images/Logo.png';
import '../App.css';

function RequestForm() {
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [pickUp, setPickUp] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [referenceNo, setReferenceNo] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('');
  const [selectType, setSelectType] = useState('');
  const [trackingCode, setTrackingCode] = useState('');
  // const [deliveryNoteVisible, setDeliveryNoteVisible] = useState(false);

  useEffect(() => {
    // Simulate fetching data or any logic that sets tracking code after form submission
    const fetchTrackingCode = () => {
      // Replace with actual logic to fetch or generate tracking code
      const generatedCode = generateTrackingCode();
      setTrackingCode(generatedCode);
    };

    fetchTrackingCode();
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  const generateTrackingCode = () => {
    const chars = '0123456789';
    let code = '';
    for (let i = 0; i < 16; i++) {
      if (i > 0 && i % 4 === 0) {
        code += '-';
      }
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const handleFullName = (event) => {
    const value = event.target.value;
    setFullName(value);
  };

  const handleContactNumber = (event) => {
    const value = event.target.value;
    setContactNumber(value);
  };

  const handleSelectType = (event) => {
    const value = event.target.value;
    setSelectType(value);
    setPickUp(value === 'For-Pickup');
    setPaymentMethod('');
  };

  const handlePaymentMethod = (event) => {
    const value = event.target.value;
    setPaymentMethod(value);
  };

  const handleReferenceNoChange = (event) => {
    const value = event.target.value;
    setReferenceNo(value);
  };

  const handlePurposeChange = (event) => {
    const value = event.target.value;
    setSelectedPurpose(value);
  };

  const resetForm = () => {
    setFullName('');
    setContactNumber('');
    setPickUp(false);
    setPaymentMethod('');
    setReferenceNo('');
    setSelectedPurpose('');
    setSelectType('');
    const newTrackingCode = generateTrackingCode();
    setTrackingCode(newTrackingCode);
  };

  

  const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (fullName === '') {
      alert('Please enter your full name');
    } else if (!isNaN(fullName)) {
      alert('Please enter a valid name');
    } else if (isNaN(contactNumber)) {
      alert ('Please enter a valid contact number')
    } else if (contactNumber.length <= 10 || contactNumber.length > 12) {
      alert ('Please enter exact 11 numbers')
    } else if (hasSpecialCharacters.test(fullName)) {
      alert('Please enter a name without special characters');
    } else if (selectType === '') {
      alert('Please select Type');
    } else if (selectType === 'For-Pickup' && !pickUp) {
      alert('Please select a Pickup Date');
    } else if (paymentMethod === 'G-Cash' && !referenceNo) {
      alert('Please enter your Gcash Reference No.');
    } else if (paymentMethod === '') {
      alert('Please select a Payment Method');
    } else if (selectedPurpose === '') {
      alert('Please enter on what purpose you need the certificate');
    } else {
      // Generate tracking code
      const newTrackingCode = generateTrackingCode();
      setTrackingCode(newTrackingCode);

      console.log('Form submitted');
      // Reset the form or navigate to another page upon successful submission
      resetForm();
    }
  };

  return (
    <section className='bg-green-500'>
      <div className='py-16 pt-24 px-5 h-fit flex justify-evenly flex-wrap'>
        <div className='bg-white text-green-500 h-fit w-full md:w-60 flex flex-col justify-center py-7 px-5 mt-5 rounded'>
          <div className='flex flex-col justify-center items-center gap-y-2 mb-3'>
            <img src={Logo} alt="Logo" className='h-28'/>
          </div>
          <div>
            <p>Fees: 100 Pesos</p>
            <p>Delivery Fee: 10 Pesos (for delivery only)</p>
            <p>Gcash: 09090909090</p>
          </div>
        </div>

        <form action="" className='w-full md:w-3/5 h-fit pb-5 bg-white mt-5 rounded' onSubmit={handleSubmit}>
            <p className='text-green-500 bg-gray-100 font-semibold p-3 border'>CERTIFICATE OF NEW RESIDENTS</p>
          
          <div className='flex flex-col gap-3'>
            <div className='w-full flex flex-col gap-y-1 px-3 py-3'>
              <label className='text-green-500'>Tracking Code (Copy your tracking code)</label>
              {trackingCode && <input type="text" disabled className='p-1 bg-gray-200' value={trackingCode} />}
            </div>

            <div className='w-full flex flex-col px-3'>
              <label className='text-green-500'>Full Name</label>
              <input type="text" placeholder='Enter your name' className='p-1 border' value={fullName} onChange={handleFullName} />
            </div>

            <div className='w-full flex flex-col px-3'>
              <label className='text-green-500'>Contact Number</label>
              <input type="text" placeholder='Enter your contact number' className='p-1 border' value={contactNumber} onChange={handleContactNumber} />
            </div>

            <div className='w-full flex flex-col gap-y-1 px-3'>
              <label className='text-green-500'>Type</label>
              <select name="" id="" className='p-1 border' value={selectType} onChange={handleSelectType}>
                <option value="">Select Type</option>
                <option value="For-Delivery">For Delivery</option>
                <option value="For-Pickup">For Pickup (in Barangay)</option>
              </select>
            </div>

            {selectType === 'For-Pickup' && (
              <div className='w-full flex flex-col gap-y-1 px-3'>
                <label className='text-green-500'>Pickup Date</label>
                <input type="date" name="pickupDate" className='p-1 border'/>
              </div>
            )}

            <div className='w-full flex flex-col gap-y-1 px-3'>
              <label className='text-green-500'>Payment Method</label>
              <select name="" id="" className='p-1 border' value={paymentMethod} onChange={handlePaymentMethod}>
                <option value="">Select Payment Method</option>
                {selectType === 'For-Pickup' ? (
                  <>
                  <option value="G-Cash">Pay Online (G-Cash)</option>
                  <option value="COD">Cash on Pickup</option>
                  </>
                ) : (
                  <>
                    <option value="G-Cash">Pay Online (G-Cash)</option>
                    <option value="COD">Cash on Delivery</option>
                  </>
                )}
              </select>
            </div>

            {paymentMethod === 'G-Cash' && (
              <div className='w-full flex flex-col gap-y-1 px-3'>
              <label className='text-green-500'>Reference No. (Please enter a valid reference number)</label>
              <input type="text" name='reference' placeholder='Enter Gcash Reference No.' className='p-1 border' value={referenceNo} onChange={handleReferenceNoChange} />
              </div>
            )}

            <div className='w-full flex flex-col gap-y-1 px-3'>
              <label className='text-green-500'>Purpose</label>
              <textarea name="" id="" rows={3} placeholder='Ex. For Scholarship' className='noResize border p-1' style={{resize: 'none'}} value={selectedPurpose} onChange={handlePurposeChange}></textarea>
            </div>

            <div className='px-10 w-full'>
              <button className='bg-green-500 text-white w-full p-1 rounded font-semibold hover:bg-green-400'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RequestForm;
