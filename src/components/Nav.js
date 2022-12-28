import '../css/Nav.css'

export default function Nav() {
  return (
    <nav className="nav">
      <img className="nav-image"
        src={process.env.PUBLIC_URL + "/images/world-icon.png"}
        alt="Icon for globe"
      />
      <span className="nav-span">my travel journal</span>
    </nav>
  );
}
