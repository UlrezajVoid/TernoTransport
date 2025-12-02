import { useNavigate } from "react-router-dom";
import "./Layout.css";

export default function Layout({ children }) {
  const navigate = useNavigate();

  const toggleTheme = () => { console.log("Тема перемикається (поки заглушка)"); };

  return (
    <>
      <div className="layout_wrapper">
        <div className="layout_header">
          <div className="header_main">
            {/* Логотип */}
            <div className="logo">
              <img src="/src/images/logo.png" alt="Logo" />
            </div>

            {/* Правий блок: заголовок + бургер + опис */}
            <div className="header_right">
              <div className="header_top">
                <div className="header_title">TernoTransport</div>
                <button className="theme_toggle" onClick={toggleTheme}>
                  🌓
                </button>
              </div>
              <div className="header_description">
                Розклад руху громадського транспорту Тернополя у вашому смартфоні.
              </div>
            </div>
          </div>

          <nav className="nav_buttons">
            <button onClick={() => navigate("/")}>Головна</button>
            <button onClick={() => navigate("/marshrutky")}>Маршрутки</button>
            <button onClick={() => navigate("/trolleybusses")}>Тролейбуси</button>
            <button onClick={() => navigate("/trains")}>Поїзди</button>
            <button onClick={() => navigate("/busses")}>Заміські автобуси</button>
          </nav>
        </div>

        <div className="content">{children}</div>
        <div className="layout_footer">
          <p>© 2025 ТерноТранспорт.</p>
          <p>Всі права захищені.</p>
        </div>
      </div>
    </>
  );
}