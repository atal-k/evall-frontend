// @components/common/TabView.js
import React, { useState } from 'react';
import styles from './TabView.module.css';
import Image from 'next/image';
const TabView = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data[0]?.id || 1);

  const activeContent = data.find(item => item.id === activeTab);

  return (
    <section className={styles['tab-view']}>
      <div className='container'>
        {/* Tab Navigation */}
        <div className={styles['tab-view__nav']}>
          {data.map(tab => (
            <button
              key={tab.id}
              className={`${styles['tab-view__tab']} ${activeTab === tab.id ? styles['tab-view__tab--active'] : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.tabName}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeContent && (
          <div key={activeContent.id} className={styles['tab-view__content']}>
            <div className={styles['tab-view__image-wrapper']}>
              <Image 
                src={activeContent.img.src} 
                alt={activeContent.img.alt}
                className={styles['tab-view__image']}
                width={1000}
                height={800}
              />
            </div>

            <div className={styles['tab-view__text']}>
              <h2 className={styles['tab-view__title']}>{activeContent.title}</h2>
              
              {activeContent.paragraphs.map((paragraph, index) => (
                <p key={index} className={styles['tab-view__paragraph']}>
                  {paragraph}
                </p>
              ))}

              {activeContent.bullets.length > 0 && (
                  <ul className={styles['tab-view__bullets']}>
                  {activeContent.bullets.map((bullet, index) => (
                    <li key={index} className={styles['tab-view__bullet-item']}>
                      {typeof bullet === 'string' ? (
                        bullet
                      ) : (
                        <>
                          <strong className={styles['tab-view__bullet-title']}>{bullet.title}:</strong>{' '}
                          {bullet.text}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TabView;