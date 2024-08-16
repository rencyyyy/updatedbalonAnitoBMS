import React, { useState, useEffect } from 'react';
import Logo from '../Images/Logo.png';
import '../App.css';
import BarangayClearance from '../Request-Certificate/BaragayClearance'
import CertificateOfResidency from '../Request-Certificate/CertificateOfResidency'

function RequestForm() {

  return (
    <section>
      <BarangayClearance />
      <CertificateOfResidency />

    </section>
  );
}

export default RequestForm;
