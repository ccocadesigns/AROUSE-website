// Helper functions
const Header = (title) => `<h1 class="section-header">${title}</h1> <hr class="red-separator">`;
const RedLetter = (letter, title) => `<h1><span class="red-letter">${letter}</span>${title}</h1> <hr class="red-separator">`;
const GenBodyMeeting = (date, time, location) => `
  <div class="meetings-container">
  <div class="left-meeting">
    <h2>General Body:</h2>
    <h3>${date}</h3>
    <h3>${time}</h3>
    <h3>${location}</h3>
  </div>
`;

const MagBoardMeeting = (date, time, location) => `
  <div class="right-meeting">
    <h2>Magazine Board:</h2>
    <h3>${date}</h3>
    <h3>${time}</h3>
    <h3>${location}</h3>
  </div>
  </div>
`;

const Article = (imageURL, date, author, title) => `
  <div class="article">
    <img class="article-picture" src="${imageURL}">
    <p class="date-text"> ${date} </p>
    <p class="author-text"> ${author} </p>
    <hr class="article-separator">
    <h3> ${title} </h3>
  </div>
`;

// Main home component
export const Home = () => {
  return `
    <div class="big-container">
      ${Header("Next meeting details")}
      ${GenBodyMeeting("12/02/2025", "7:30 PM", "Enarson 254")}
      ${MagBoardMeeting("12/02/2025", "7:30 PM", "Enarson 254")}
      
      ${Header("Featured Articles")}
      <div class="articles-grid">
      ${Article("/life-of-a-showgirl.png", "December 5th, 2025", "Placeholder Author", "The Life of a Showgirl should be a victory lap; instead it falls flat")}
      ${Article("/tame-impala-deadbeat.png", "December 5th, 2025", "Placeholder Author", "Tame Impala – Deadbeat")}
      ${Article("/matt-maltese.png", "December 5th, 2025", "Placeholder Author", "Everyone Adores Matt Maltese (At Least I Do)")}
      </div>
      
      ${RedLetter("C", "OLUMNS")}
      <div class="articles-grid">
      ${Article("/life-of-a-showgirl.png", "December 5th, 2025", "Placeholder Author", "The Life of a Showgirl should be a victory lap; instead it falls flat")}
      ${Article("/tame-impala-deadbeat.png", "December 5th, 2025", "Placeholder Author", "Tame Impala – Deadbeat")}
      ${Article("/matt-maltese.png", "December 5th, 2025", "Placeholder Author", "Everyone Adores Matt Maltese (At Least I Do)")}
      </div>
      
      ${RedLetter("C", "ULTURE")}
      <div class="articles-grid">
      ${Article("/life-of-a-showgirl.png", "December 5th, 2025", "Placeholder Author", "The Life of a Showgirl should be a victory lap; instead it falls flat")}
      ${Article("/tame-impala-deadbeat.png", "December 5th, 2025", "Placeholder Author", "Tame Impala – Deadbeat")}
      ${Article("/matt-maltese.png", "December 5th, 2025", "Placeholder Author", "Everyone Adores Matt Maltese (At Least I Do)")}
      </div>
      
      ${RedLetter("M", "USIC")}
      <div class="articles-grid">
      ${Article("/life-of-a-showgirl.png", "December 5th, 2025", "Placeholder Author", "The Life of a Showgirl should be a victory lap; instead it falls flat")}
      ${Article("/tame-impala-deadbeat.png", "December 5th, 2025", "Placeholder Author", "Tame Impala – Deadbeat")}
      ${Article("/matt-maltese.png", "December 5th, 2025", "Placeholder Author", "Everyone Adores Matt Maltese (At Least I Do)")}
      </div>
      
      ${RedLetter("C", "AMPUS")}
      <div class="articles-grid">
      ${Article("/life-of-a-showgirl.png", "December 5th, 2025", "Placeholder Author", "The Life of a Showgirl should be a victory lap; instead it falls flat")}
      ${Article("/tame-impala-deadbeat.png", "December 5th, 2025", "Placeholder Author", "Tame Impala – Deadbeat")}
      ${Article("/matt-maltese.png", "December 5th, 2025", "Placeholder Author", "Everyone Adores Matt Maltese (At Least I Do)")}
      </div>
    </div>
  `;
};
