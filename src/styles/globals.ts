import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: #f9f9f9;
  color: #333;
  overflow-x: hidden; /* Prevents horizontal scrolling */
  }
     h1, h2, h3, h4 {
    color: #64ffda;
  }
    .navbar {
    background-color: #0a192f;
    color: #ccd6f6;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

   a {
    color: #64ffda;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ccd6f6;
    }
  }
`;

export default GlobalStyle;
