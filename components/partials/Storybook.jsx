import React from 'react';
import Layout from '../Layout.jsx';
import styles from '../../styles/storybook.module.css';

const stories = [
  {
    id: 1,
    title: 'Button Component',
    description: 'A reusable button with various styles and sizes.',
    link: '#button-story',
  },
  {
    id: 2,
    title: 'Card Component',
    description: 'Displays information in a visually appealing card layout.',
    link: '#card-story',
  },
  {
    id: 3,
    title: 'Form Component',
    description: 'Showcases a sample form with validation.',
    link: '#form-story',
  },
  {
    id: 4,
    title: 'Modal Component',
    description: 'A customizable modal with animations.',
    link: '#modal-story',
  },
];

function Storybook() {
  return (
    <Layout>
      <div className={styles.storybook}>
        <h1>GraphQL-Storybook</h1>
        <p>Explore the collection of reusable components below:</p>
        <div className={styles.stories}>
          {stories.map((story) => (
            <div key={story.id} className={styles.story}>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <a href={story.link} className={styles.link}>
                View Story
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Storybook;
