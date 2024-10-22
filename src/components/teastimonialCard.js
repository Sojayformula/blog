import React from "react";

const TestimonialCard = ({ name, image, date, testimonial }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-gray-300"
        />
        <div className="ml-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
      <p className="text-gray-700">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;




import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonialData = [
    {
      name: "John Doe",
      image: "https://via.placeholder.com/150",
      date: "2023-09-15",
      testimonial:
        "This product is amazing! It really helped me improve my workflow.",
    },
    {
      name: "Jane Smith",
      image: "https://via.placeholder.com/150",
      date: "2023-10-01",
      testimonial: "Great service and support. Highly recommended!",
    },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
      {testimonialData.map((item, index) => (
        <TestimonialCard
          key={index}
          name={item.name}
          image={item.image}
          date={item.date}
          testimonial={item.testimonial}
        />
      ))}
    </div>
  );
};

export default Testimonials;



import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

const ShareButtons = () => {
  const shareUrl = 'https://yourwebsite.com'; // Replace with your URL
  const title = 'Check out this awesome blog!'; // Replace with your title

  return (
    <div className="share-buttons">
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton url={shareUrl} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};

export default ShareButtons;

