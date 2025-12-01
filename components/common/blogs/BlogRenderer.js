// ============================================================================
// FILE: /src/components/common/blogs/BlogRenderer.js
// ============================================================================

import React, { useMemo } from 'react';
import DOMPurify from 'dompurify';
import styles from './BlogRenderer.module.css';
import Image from 'next/image';
const BlogRenderer = ({ content }) => {
  const safeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  const renderBlock = useMemo(() => {
    if (!content || !content.blocks) {
      return null;
    }

    return content.blocks.map((block, index) => {
      const { type, data, id } = block;

      switch (type) {
        case 'header':
        case 'Header':
          const HeadingTag = `h${data.level}`;
          return (
            <HeadingTag
              key={id || index}
              className={`blog-content__heading blog-content__heading--${data.level}`}
              dangerouslySetInnerHTML={safeHTML(data.text)}
            />
          );

        case 'paragraph':
          return (
            <p
              key={id || index}
              className="blog-content__paragraph"
              dangerouslySetInnerHTML={safeHTML(data.text)}
            />
          );

        case 'list':
        case 'List':
          const ListTag = data.style === 'ordered' ? 'ol' : 'ul';
          return (
            <ListTag key={id || index} className={`blog-content__list blog-content__list--${data.style}`}>
              {data.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={safeHTML(item)} />
              ))}
            </ListTag>
          );

        case 'image':
          return (
            <figure key={id || index} className="blog-content__image-wrapper">
              <Image
                src={data.file?.url || data.url}
                alt={data.caption || 'Blog image'}
                className="blog-content__image"
                loading="lazy"
                fill
              />
              {data.caption && (
                <figcaption
                  className={styles['blog-content__image-caption']}
                  dangerouslySetInnerHTML={safeHTML(data.caption)}
                />
              )}
            </figure>
          );

        case 'quote':
        case 'Quote':
          return (
            <blockquote key={id || index} className={styles['blog-content__quote']}>
              <p
                className={styles['blog-content__quote-text']}
                dangerouslySetInnerHTML={safeHTML(data.text)}
              />
              {data.caption && (
                <cite
                  className={styles['blog-content__quote-caption']}
                  dangerouslySetInnerHTML={safeHTML(data.caption)}
                />
              )}
            </blockquote>
          );

        case 'delimiter':
          return <hr key={id || index} className={styles['blog-content__delimiter']} />;

        case 'table':
        case 'Table':
          return (
            <div key={id || index} className={styles['blog-content__table-wrapper']}>
              <table className={styles['blog-content__table']}>
                <tbody>
                  {data.content.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => {
                        const CellTag =
                          data.withHeadings && rowIndex === 0 ? 'th' : 'td';
                        return (
                          <CellTag
                            key={cellIndex}
                            dangerouslySetInnerHTML={safeHTML(cell)}
                          />
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );

        case 'checklist':
        case 'Checklist':
          return (
            <ul key={id || index} className={styles['blog-content__checklist']}>
              {data.items.map((item, i) => (
                <li key={i} className={styles['blog-content__checklist-item']}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    readOnly
                    className={styles['blog-content__checkbox']}
                  />
                  <span dangerouslySetInnerHTML={safeHTML(item.text)} />
                </li>
              ))}
            </ul>
          );

        case 'linkTool':
        case 'link':
          return (
            <div key={id || index} className={styles['blog-content__link-preview']}>
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['blog-content__link']}
              >
                {data.meta?.title || data.link}
              </a>
            </div>
          );

        case 'raw':
          return (
            <div
              key={id || index}
              className={styles['blog-content__raw']}
              dangerouslySetInnerHTML={safeHTML(data.html)}
            />
          );

        case 'embed':
          return (
            <div key={id || index} className={styles['blog-content__embed']}>
              <iframe
                src={data.embed}
                title={data.caption || 'Embedded content'}
                className={styles['blog-content__iframe']}
                frameBorder="0"
                allowFullScreen
              />
              {data.caption && (
                <p className={styles['blog-content__embed-caption']}>{data.caption}</p>
              )}
            </div>
          );

        default:
          console.warn(`Unknown block type: ${type}`, block);
          return null;
      }
    });
  }, [content]);

  return <div className={styles['blog-content']}>{renderBlock}</div>;
};

export default BlogRenderer;