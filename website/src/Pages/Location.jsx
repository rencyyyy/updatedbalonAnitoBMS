import React from 'react'

function Location() {
  return (
    <section className=''>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.159526362132!2d120.46969330916475!3d14.43637123102111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396192d3c682871%3A0x801a23e613c67725!2sBalon%20Anito%20Barangay%20Hall%2C%20National%20Rd%2C%20Mariveles%2C%20Bataan!5e1!3m2!1sen!2sph!4v1718296501071!5m2!1sen!2sph"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      ></iframe>
    </section>
  )
}

export default Location