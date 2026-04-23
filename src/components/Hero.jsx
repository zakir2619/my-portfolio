
const Hero = () => {
  return (
    <div>
      <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Building Digital <span className="text-blue-600">Experiences</span> That Matter.
          </h1>
          <p className="text-lg text-gray-600">
            আমি একজন ফ্রন্ট-এন্ড ডেভেলপার। React, Tailwind CSS এবং আধুনিক ওয়েব প্রযুক্তিতে আমার দক্ষতা ব্যবহার করে আমি স্কেলেবল এবং ইউজার-ফ্রেন্ডলি ওয়েবসাইট তৈরি করি।
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Hire Me
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
              View Projects
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 bg-blue-200 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-blue-600 font-bold text-6xl">Dev</span>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;