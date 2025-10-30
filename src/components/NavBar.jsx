import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <Link to="">
        <button>Home</button>
      </Link>
      <Link to="page1">
        <button>page 1</button>
      </Link>
      <Link to="page2">
        <button>page 2</button>
      </Link>
      <Link to="page3">
        <button>page 3</button>
      </Link>
      <Link to="page4">
        <button>page 4</button>
      </Link>
    </>
  );
}
