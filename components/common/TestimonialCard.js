// Testimonial Card Component
import styles from './TestimonialCard.module.css';
import Image from 'next/image';
const TestimonialCard = ({ name, role, company, avatar, rating, text, position, isActive }) => {
  return (
    <div className={`${styles['testimonial-card']} ${styles[`testimonial-card--${position}`]} ${isActive ? styles['testimonial-card--active'] : ''}`}>
      <div className={styles['testimonial-card__content']}>
        <div className={styles['testimonial-card__header']}>
          <Image src={avatar} alt={name} className={styles['testimonial-card__avatar']} width={96} height={96} />
          <div className={styles['testimonial-card__info']}>
            <h3 className={styles['testimonial-card__name']}>{name}</h3>
            <p className={styles['testimonial-card__role']}>{role}, {company}</p>
            <div className={styles['testimonial-card__rating']}>
              {[...Array(rating)].map((_, i) => (
                <span key={i} className={styles['testimonial-card__star']}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z" />
              </svg></span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles['testimonial-card__quote-wrapper']}>
          <span className={styles['testimonial-card__quote-icon']}>&quot;</span>
          <p className={styles['testimonial-card__quote']}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;