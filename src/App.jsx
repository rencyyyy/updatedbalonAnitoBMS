import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import RequestForm from './Components/RequestForm';
import { ActiveSectionProvider } from './Components/ActiveSectionContext';

import BarangayClearance from './Request-Certificate/BaragayClearance'
import CertificateOfResidency from './Request-Certificate/CertificateOfResidency'
import CertificateOfIndigency from './Request-Certificate/CertificateOfIndigency'
import CertificateOfLowIncome from './Request-Certificate/CertificateOfLowIncome'
import BusinessClearance from './Request-Certificate/BusinessClearance'
import CertificateOfDeath from './Request-Certificate/CertificateOfDeath'
import CertificateOfNoProperty from './Request-Certificate/CertificateOfNoProperty'
import CertificateOfGoodMoral from './Request-Certificate/CertificateOfGoodMoral'
import CertificateForNewResidents from './Request-Certificate/CertificateForNewResidents'
import CertificateForSoloParent from './Request-Certificate/CertificateForSoloParent'

function App() {
  return (
    <main>
      <BrowserRouter>
        <ActiveSectionProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/barangay-clearance-form" element={<BarangayClearance />} />
            <Route path='/certificate-of-residency-form' element={<CertificateOfResidency />}/>
            <Route path='/certificate-of-indigency-form' element={<CertificateOfIndigency />}/>
            <Route path='/certificate-of-low-income-form' element={<CertificateOfLowIncome />}/>
            <Route path='/business-clearance-form' element={<BusinessClearance />}/>
            <Route path='/certificate-of-death-form' element={<CertificateOfDeath />}/>
            <Route path='/certificate-of-no-property-form' element={<CertificateOfNoProperty />}/>
            <Route path='/certificate-of-good-moral-form' element={<CertificateOfGoodMoral />}/>
            <Route path='/certificate-for-new-residents-form' element={<CertificateForNewResidents />}/>
            <Route path='/certificate-for-solo-parent-form' element={<CertificateForSoloParent />}/>

          </Routes>
          <Footer />
        </ActiveSectionProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
