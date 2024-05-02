'use client'
import { useState } from 'react';

import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use
import Image from 'next/image';


const socialProofs = [
  {
    name: `Rajesh Karki`,
    company: `Cognizant Technology Solutions`,
    image: `/review.png`,
    text: `I got the right guidance from the right people at the right time. I am very thankful to DataInsight for helping me to get my first job in the USA.`,
  },
  {
    name: `Rakul Sharma`,
    company: `Amazon.com, Inc.`,
    image: `/review.png`,
    text: `I am very thankful to DataInsight for helping me to get my first job in the USA.`,
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex + 1 < socialProofs.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previous = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={cn(` mx-auto my-8`)}>
         
      <div className={cn(`max-w-7xl mx-auto`)}>

        <section>

          <figure>
            <div className={cn(`relative bg-gray-100 rounded-md`)}>
              <FontAwesomeIcon  icon={faQuoteLeft} className={cn(`w-16 md:w-12 left-0 md:-left-2 absolute top-0 pl-4 md:pl-0 text-gray-300`) } style={{ fontSize: '4rem' }}   />
              <div className={cn(`pt-20 px-6  md:px-0`)}>
                <p className={cn(` text-black font-bold ml-[15px] text-base pb-6`)}>{socialProofs[currentIndex].text}</p>
                <div className={cn(`flex items-center justify-between`)}>
                  <div className={cn(`flex items-center pb-12`)}>
                    <div className={cn(`h-12 w-12  ml-[15px]`)}>
                      <Image
                        src={socialProofs[currentIndex].image}
                        alt={socialProofs[currentIndex].name}
                        className={cn(`h-full w-full object-cover overflow-hidden rounded-full `)}
                        height={48}
                        width={48}
                      />
                    </div>
                    <p className={cn(`text-gray-600  font-bold ml-3`)}>
                      {socialProofs[currentIndex].name} <br />
                      <span className={cn(`text-gray-600 text-base font-light`)}>
                        {socialProofs[currentIndex].company}
                      </span>
                    </p>
                  </div>
                  <div className={cn(`cursor-pointer flex pb-12`)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#CBD5E0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={previous}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={44}
                      height={44}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#CBD5E0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      onClick={next}
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </section>
      </div>
    </div>
  );
};

export default Reviews;