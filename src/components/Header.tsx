import Logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import {
  FaGithub,
  FaHome,
  FaDev,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { useRef, useEffect } from "react";
import Login from "./Login";
import { logout } from "../requests/user";
import { IHeader } from "../types/component.types";
import { HEADER_HEIGHT } from "../constants/style";

const Header = ({
  theme,
  showMemberForm,
  gameRunning,
  setGameRunning,
  setShowMemberForm,
  setUser,
  isLoggedIn,
}: IHeader) => {
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<SVGElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!isLoggedIn()) {
      setShowMemberForm(!showMemberForm);
    } else {
      setGameRunning(false);
      navigate("/profile");
    }
  };

  const loginWrapperStyle = {
    opacity: showMemberForm ? "1" : "0",
    transition: "opacity 0.2s ease-in-out",
    zIndex: showMemberForm ? "5" : "-1",
  };

  const handleLogout = async () => {
    const callback = () => {
      localStorage.clear();
      setUser({ access: "", refresh: "" });
      navigate("/");
    };
    const refresh = localStorage.getItem("refresh");
    refresh && (await logout({ refresh: refresh }, callback));
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (
      dropdownRef?.current &&
      !(dropdownRef.current as Node).contains(target)
    ) {
      if (
        !target?.classList.contains("fa-user-circle") &&
        !target?.parentElement?.classList.contains("fa-user-circle")
      ) {
        setShowMemberForm(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={"header-wrapper " + (gameRunning ? "passive" : "")}
      style={{ height: HEADER_HEIGHT.string }}
    >
      <div
        className="header flex-center-center"
        style={{
          backgroundColor: theme,
          background: `linear-gradient(90deg,rgb(255 255 255/50%),rgb(0 0 0/50%)),
          ${theme}`,
        }}
      >
        <div
          className="brand flex-center-center"
          onClick={() => {
            navigate("/");
            setGameRunning(false);
          }}
        >
          <h1>AIM</h1>
          <img src={Logo} alt="" />
          <h1>MASTER</h1>
        </div>
        <div className="links flex-center-center">
          {window.location.pathname !== "/" && (
            <Link to="/" onClick={() => setGameRunning(false)}>
              <FaHome />
            </Link>
          )}
          <Link to="/profile">
            <FaUserCircle onClick={handleClick} className="fa-user-circle" />
          </Link>
          <div style={loginWrapperStyle} ref={dropdownRef}>
            <Login
              theme={theme}
              setUser={setUser}
              setShowMemberForm={setShowMemberForm}
            />
          </div>
          <a
            href="https://github.com/eliteKebob/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://kaanozmen.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDev />
          </a>
          {isLoggedIn() && (
            <FaSignOutAlt
              style={{ cursor: "pointer" }}
              onClick={handleLogout}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
