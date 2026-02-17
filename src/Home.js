// Helper functions
const Header = (title) => `<h1 class="section-header">${title}</h1>`;
const SpecialTitle = (text) => `<h1 class="special-title">${text}</h1>`;
const Meetings = () => `
  <div class="meetings-container">
    <p>Upcoming Meetings and Schedules go here.</p>
  </div>
`;
const Articles = () => `
  <article class="articles-grid">
    <p>Article snippets and content cards...</p>
  </article>
`;

// Main home component
export const Home = () => {
  return `
    <div class="big-container">
      ${Header("Main Header")}
      ${Meetings()}
      
      ${Header("Resources")}
      ${Articles()}
      
      ${SpecialTitle("Featured Insights")}
      ${Articles()}
      
      ${SpecialTitle("Community News")}
      ${Articles()}
      
      ${SpecialTitle("Archive")}
      ${Articles()}
      
      ${SpecialTitle("Final Thoughts")}
      ${Articles()}
    </div>
  `;
};