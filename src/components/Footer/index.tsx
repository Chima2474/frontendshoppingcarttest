import "./Footerstyles.css";

type Props = {};

const navLinks: string[] = ["facebook", "instagram", "twitter", "Discord"];

const index = (props: Props) => {
  return (
    <footer className="footer-container">
      <div className="footer">
        {navLinks.map((item) => (
          <li key={item} className="navLinks">
            <a href="#" className="navLink">
              {item}
            </a>
          </li>
        ))}
      </div>
    </footer>
  );
};

export default index;
