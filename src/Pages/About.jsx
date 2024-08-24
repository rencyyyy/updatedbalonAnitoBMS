import React from 'react';
import '../index.css';

function About() {
  return (
    <div className="bg-green-500">
      <section className="relative w-full h-96 bg-cover bg-center">
        <div className="absolute inset-0 bg-white flex items-center justify-center">
          <div className="text-center text-white p-10">
            <h1 className="text-5xl font-bold mb-4 text-green-500">About Barangay Balon Anito</h1>
            <p className="text-2xl text-green-500">Welcome to Barangay Balon Anito, a vibrant and inclusive community.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-8 text-center">Our Story and Mission</h2>

          <div className="grid md:grid-cols-3 gap-12 mx-5 overflow-y-auto">
            <div className="bg-green-100 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Our Mission</h3>

              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in arcu ut ligula dictum feugiat.
                Quisque vel elit ac nunc dapibus fermentum. Nulla facilisi. Donec non laoreet nunc, sit amet
                bibendum odio.
              </p>
            </div>

            <div className="bg-green-100 p-8 rounded-lg shadow-md h-80 overflow-y-auto">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Our History</h3>

              <p className="text-gray-700 leading-relaxed">
                We already know that Bataan is one of the place in the Philippines that has many beautiful places.
                One of the most common tourist spot in the barangay of Balon Anito in Mariveles, Bataan is the place where we can found the small dead volcano.
                The name of this volcano is the same as the name of the barangay where it can be found, which is “Balon Anito.” It is known to have a therapeutic 
                effect on one’s health maybe because of the hot water inside of it that’s why a lot of elderly people visit the place to dip their feet in the hot water by sitting on the mouth of the volcano. 
              </p>
            </div>

            <div className="bg-green-100 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-600 mb-4">Our Services</h3>

              <p className="text-gray-700 leading-relaxed">
                We offer an online certificate service for residents of Barangay Balon Anito. 
                Whether you need birth certificates, clearances, or other official documents, our online service 
                ensures quick processing and delivery.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
