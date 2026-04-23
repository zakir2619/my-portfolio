


const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "৳২,০০০",
      features: ["১টি ল্যান্ডিং পেজ", "রেসপনসিভ ডিজাইন", "বেসিক এসইও", "৩ দিন সাপোর্ট"],
      highlight: false
    },
    {
      name: "Standard",
      price: "৳৫,০০০",
      features: ["৩টি পেইজ ওয়েবসাইট", "রেসপনসিভ ডিজাইন", "কন্টাক্ট ফর্ম", "৭ দিন সাপোর্ট"],
      highlight: true // এটি হাইলাইট করা থাকবে
    },
    {
      name: "Premium",
      price: "৳১০,০০০",
      features: ["ফুল ডাইনামিক সাইট", "এডমিন প্যানেল", "ই-কমার্স সুবিধা", "৩০ দিন সাপোর্ট"],
      highlight: false
    }
  ];
  return (
    <div>
      <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-gray-600">আপনার প্রয়োজন অনুযায়ী সেরা প্যাকেজটি বেছে নিন।</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl border ${plan.highlight ? 'border-blue-600 shadow-2xl scale-105' : 'border-gray-200 shadow-sm'} bg-white`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="text-4xl font-extrabold text-blue-600 mb-6">{plan.price}</div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="mr-2 text-green-500">✔</span> {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Pricing;