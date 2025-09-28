'use client';

import React, { useState, useRef } from 'react';
import services from '../../data/services_data.json';
import { Cog, BarChart3, HeadphonesIcon, Code } from 'lucide-react';
import styles from '../styles/Services.module.css';

const getIconForService = (serviceId) => {
  const className = 'service-icon';
  switch (serviceId) {
    case '1':
      return <Cog className={className + ' rotate-effect'} />;
    case '2':
      return <BarChart3 className={className + ' scale-effect'} />;
    case '3':
      return <HeadphonesIcon className={className + ' scale-effect'} />;
    case '4':
      return <Code className={className + ' scale-effect'} />;
    default:
      return null;
  }
};

function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardRefs = useRef([]);

  return (
    <section id="services" className={styles.section}>
      <div className={styles.services_container}>
        <div className="">
          <h2 className={styles.section_title}>Our Services</h2>
        </div>

        <div className={styles.stacked_services}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              setHoveredCard={setHoveredCard}
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

const ServiceCard = React.forwardRef(({ service, setHoveredCard }, ref) => {
  return (
    <div
      ref={ref}
      className={styles.service_card}
      onMouseEnter={() => setHoveredCard && setHoveredCard(service.id)}
      onMouseLeave={() => setHoveredCard && setHoveredCard(null)}
    >
      <div className={styles.service_card_content}>

        <div className={styles.service_card_content_left}>
          {/* Floating Icon Circle */}
      <div className={styles.service_card_icon_circle}>
        {getIconForService(service.id)}
      </div>
        </div>

        <div className={styles.service_card_content_right}>
          <div className={styles.service_card_icon_title}>
            <h3 className={styles.service_title}>{service.title}</h3>
          </div>

          <div className={styles.service_description}>
            <p className={styles.service_description}>{service.description}</p>

            {service.features && (
              <ul className={styles.service_features}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.service_feature}>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>



        {/* <button className={styles.service_card_button}>Order Now</button> */}
      </div>
    </div>
  );
});

// ✅ Add a display name for the forwardRef component to satisfy ESLint
ServiceCard.displayName = 'ServiceCard';
