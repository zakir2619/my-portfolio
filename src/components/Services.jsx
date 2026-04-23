
const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "React এবং Tailwind CSS ব্যবহার করে আধুনিক, ফাস্ট এবং রেসপনসিভ ওয়েবসাইট তৈরি করি।",
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      description: "ইউজার ফ্রেন্ডলি এবং নান্দনিক ডিজাইনের মাধ্যমে সেরা ইউজার এক্সপেরিয়েন্স নিশ্চিত করি।",
      icon: "🎨"
    },
    {
      title: "Performance Optimization",
      description: "ওয়েবসাইটের লোডিং স্পিড বৃদ্ধি এবং এসইও (SEO) ফ্রেন্ডলি কোড নিশ্চিত করি।",
      icon: "⚡"
    }
  ];
  return (
    <div>
      <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Services</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Services;