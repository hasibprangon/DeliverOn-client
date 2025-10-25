import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../../assets/customer-top.png";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      text: "A posture corrector works by providing support and gentle alignment to your shoulders, back and spine, encouraging you to maintain proper posture throughout the day.",
      author: "Rasel Ahomed",
      role: "CTO",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      initials: "RA",
    },
    {
      id: 2,
      text: "Using the posture corrector daily helped me reduce my back pain and improve my confidence during long work hours.",
      author: "Awlad Hossin",
      role: "Senior Product Designer",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      initials: "AH",
    },
    {
      id: 3,
      text: "Our team found the product highly effective in encouraging ergonomic habits at work. It’s comfortable and easy to wear.",
      author: "Nasir Uddin",
      role: "CEO",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      initials: "NU",
    },
    {
      id: 4,
      text: "I’ve tried many posture correctors, but this one truly stands out for its comfort and adjustability. Highly recommended!",
      author: "Sarah Johnson",
      role: "Product Manager",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      initials: "SJ",
    },
    {
      id: 5,
      text: "After a week of using it, I noticed a big difference in my sitting posture while working from home. Great value for money!",
      author: "David Lee",
      role: "Marketing Executive",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      initials: "DL",
    },
    {
      id: 6,
      text: "This posture corrector helped me stay aligned during long meetings. Lightweight and discreet under clothes.",
      author: "Priya Sharma",
      role: "UI/UX Designer",
      avatar: "https://randomuser.me/api/portraits/women/66.jpg",
      initials: "PS",
    },
    {
      id: 7,
      text: "Comfortable fit and noticeable results! My neck strain from working on the computer has greatly reduced.",
      author: "Jonathan Miller",
      role: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/men/77.jpg",
      initials: "JM",
    },
    {
      id: 8,
      text: "Perfect for office use! It gently reminds me to keep my posture straight without being restrictive.",
      author: "Emily Carter",
      role: "Operations Manager",
      avatar: "https://randomuser.me/api/portraits/women/88.jpg",
      initials: "EC",
    },
    {
      id: 9,
      text: "I was skeptical at first, but after consistent use, I can confidently say my posture and focus have both improved.",
      author: "Mohammad Hossain",
      role: "Entrepreneur",
      avatar: "https://randomuser.me/api/portraits/men/99.jpg",
      initials: "MH",
    },
    {
      id: 10,
      text: "Lightweight, comfortable, and genuinely effective. I wear it almost every day while coding or studying.",
      author: "Lina Park",
      role: "Front-End Developer",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
      initials: "LP",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="w-full py-12 md:py-20 px-4 md:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <img src={img1} alt="" className="w-16 h-16 md:w-60 md:h-24" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What our customers are saying
          </h2>

          {/* Subtitle */}
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro.
            Achieve proper alignment, reduce pain, and strengthen your body with ease!
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Cards Container */}
          <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden">
            {/* Left Card (Hidden on mobile) */}
            <div className="hidden lg:block flex-shrink-0 w-1/4">
              <div className="opacity-40 scale-90 transition-all duration-300">
                <TestimonialCard
                  testimonial={testimonials[(currentSlide - 1 + testimonials.length) % testimonials.length]}
                />
              </div>
            </div>

            {/* Center Card */}
            <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
              <TestimonialCard testimonial={testimonials[currentSlide]} isActive={true} />
            </div>

            {/* Right Card (Hidden on mobile) */}
            <div className="hidden lg:block flex-shrink-0 w-1/4">
              <div className="opacity-40 scale-90 transition-all duration-300">
                <TestimonialCard
                  testimonial={testimonials[(currentSlide + 1) % testimonials.length]}
                />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10 p-2 rounded-full hover:bg-slate-200 transition-colors"
          >
            <ChevronLeft className="w-10 h-10 rounded-full bg-[#CAEB66]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-10 p-2 rounded-full hover:bg-slate-200 transition-colors"
          >
            <ChevronRight className="w-10 h-10 rounded-full bg-[#CAEB66]" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-2 mt-8 md:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-8 h-3 bg-lime-400"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, isActive = false }) => {
  return (
    <div
      className={`bg-white rounded-lg p-6 md:p-8 shadow-sm transition-all duration-300 ${
        isActive ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="text-4xl md:text-5xl text-slate-500 mb-4">
        <FaQuoteRight />
      </div>

      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 min-h-24 md:min-h-28">
        {testimonial.text}
      </p>

      <div className="border-t border-dashed border-slate-200 mb-6"></div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-slate-900 text-sm md:text-base">
            {testimonial.author}
          </p>
          <p className="text-slate-500 text-xs md:text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
