 
import { testimonials } from "../_mock/Data";
import { testimonialType } from "../store/Types";

const ratings = [
  {
    rating: <i className="fa-solid fa-star rating-box"></i>,
  },
  {
    rating: <i className="fa-solid fa-star rating-box"></i>,
  },
  {
    rating: <i className="fa-solid fa-star rating-box"></i>,
  },
  {
    rating: <i className="fa-solid fa-star rating-box"></i>,
  },
  {
    rating: <i className="fa-solid fa-star rating-box"></i>,
  },
];

const TestimonialsHeader = () => {
  return (
    <div className="testimonials-container-header-section">
      <h1 className="testimonials-container-header-title">
        What our customers say
      </h1>
      <div className="testimonials-title-wrapper">
        <ul className="rating-wrapper">
          {ratings.map((rate, index) => (
            <li key={index}>{rate.rating}</li>
          ))}
          <li className="rating-header-text">
            460 Reviews on{" "}
            <i className="fa-solid fa-star trust-pilot-rating"></i> Trustpilot
          </li>
        </ul>

        <a href="/">
          Next<i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
    </div>
  );
};

const TestimonialsWrap = () => {
  return (
    <ul className="testimonials-cards-wrapper">
      {testimonials?.map((testimonial: testimonialType) => (
        <li key={testimonial.id}>
          <h4>{testimonial.title}</h4>
          <p>"{testimonial.description}"</p>

          <div>
            <div className="card-ratings">
              {ratings.map((rate, index) => (
                <span key={index}>{rate.rating}</span>
              ))}
            </div>

            <p className="testimonial-username">{testimonial.username}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper container-wrapper">
      <TestimonialsHeader />
      <TestimonialsWrap />
    </div>
  );
};

export default Testimonials;
