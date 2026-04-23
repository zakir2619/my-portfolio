
const Team = () => {
  const teamMembers = [
    {
      name: "রাহিম আহমেদ",
      role: "Lead Developer",
      image: "",
    },
    {
      name: "সারা ইসলাম",
      role: "UI/UX Designer",
      image: "",
    },
    {
      name: "করিম হোসেন",
      role: "Project Manager",
      image: "",
    }
  ];
  return (
    <div>
      <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">আমাদের দক্ষ এবং সৃজনশীল টিম মেম্বারদের সাথে পরিচিত হোন যারা প্রতিনিয়ত নতুন কিছু তৈরির চেষ্টা করে।</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-50"
              />
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4 text-gray-400">
                <a href="#" className="hover:text-blue-600 transition">LinkedIn</a>
                <a href="#" className="hover:text-blue-600 transition">Twitter</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Team;