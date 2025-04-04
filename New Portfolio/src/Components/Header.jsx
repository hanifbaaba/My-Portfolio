import My_Image from "/Users/apple/Desktop/My Portfolio/New Portfolio/src/assets/My_Image.jpg";
export default function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Hanif Muhammad Baaba</h1>
      <h3 className="header-subtitle">React Developer</h3>
      <br />
      <img src={My_Image} alt="Profile" className="header-image" />
    </div>
  );
}
