
import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <p className="text-gray-600">যেকোনো প্রজেক্ট বা কাজের ব্যাপারে আমার সাথে সরাসরি যোগাযোগ করুন।</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* যোগাযোগ মাধ্যম */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <span className="text-2xl">📧</span>
              <div>
                <h4 className="font-semibold text-gray-900">ইমেইল</h4>
                <p className="text-gray-600">zakirh.mtlab@com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl">📍</span>
              <div>
                <h4 className="font-semibold text-gray-900">ঠিকানা</h4>
                <p className="text-gray-600">রাজশাহী, বাংলাদেশ</p>
              </div>
            </div>
          </div>

          {/* কন্টাক্ট ফর্ম */}
          <form className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="আপনার নাম" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input 
                type="email" 
                placeholder="আপনার ইমেইল" 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <input 
              type="text" 
              placeholder="বিষয়" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea 
              rows="4" 
              placeholder="আপনার মেসেজ" 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;