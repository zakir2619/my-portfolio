import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "আমি কীভাবে আপনার সার্ভিস অর্ডার করব?",
      answer: "আপনি আমাদের কন্টাক্ট সেকশনে গিয়ে ফর্ম পূরণ করতে পারেন অথবা সরাসরি ইমেইলে আমাদের সাথে যোগাযোগ করতে পারেন।"
    },
    {
      question: "প্রজেক্ট ডেলিভারি দিতে কত সময় লাগে?",
      answer: "প্রজেক্টের জটিলতা এবং পরিমাণের ওপর ভিত্তি করে সময় নির্ধারণ করা হয়। সাধারণত ছোট প্রজেক্ট ৩-৫ কার্যদিবসের মধ্যে শেষ করি।"
    },
    {
      question: "আপনারা কি কি প্রযুক্তি (Technology) ব্যবহার করেন?",
      answer: "আমরা মূলত React, Next.js, Tailwind CSS, এবং আধুনিক JavaScript প্রযুক্তি ব্যবহার করে ওয়েবসাইট তৈরি করি।"
    },
    {
      question: "পেমেন্ট পদ্ধতি কী?",
      answer: "আমরা বর্তমানে ব্যাংক ট্রান্সফার, বিকাশ (bKash), এবং নগদ (Nagad) এর মাধ্যমে পেমেন্ট গ্রহণ করি।"
    }
  ];
  return (
    <div>
      <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">সাধারণ প্রশ্নাবলী (FAQ)</h2>
          <p className="text-gray-600 mt-2">আপনার মনে থাকা সাধারণ প্রশ্নের উত্তরগুলো এখানে দেওয়া হলো।</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition duration-300"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className="text-blue-600 font-bold">{activeIndex === index ? '-' : '+'}</span>
              </button>
              
              {activeIndex === index && (
                <div className="p-5 bg-white text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Faq;