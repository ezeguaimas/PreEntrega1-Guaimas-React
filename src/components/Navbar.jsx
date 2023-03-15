import CartWidget from "./CartWidget";
import leilaNailsLogo from "./img/leilaNailsLogo.png";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <img
            src={leilaNailsLogo}
            style={{
              height: "100px",
              width: "150px",
              paddingInline: "3vh",
              marginInline: "2vh",
            }}
            alt="Leila Nails"
            href="#"
          />
        </div>

        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: "1vh",
            paddingInline: "3vh",
          }}
        >
          <li style={{ margin: "2vh", paddingInline: "1vh" }}>
            <a style={{ textDecoration: "none", fontSize: "3vmin" }} href="#">
              Diseños
            </a>
          </li>
          <li style={{ margin: "2vh" }}>
            <a style={{ textDecoration: "none", fontSize: "3vmin" }} href="#">
              Productos
            </a>
          </li>
          <li style={{ margin: "2vh" }}>
            <a style={{ textDecoration: "none", fontSize: "3vmin" }} href="#">
              Cursos
            </a>
          </li>
        </ul>
      </div>

      <div style={{ marginRight: "3vh" }}>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
