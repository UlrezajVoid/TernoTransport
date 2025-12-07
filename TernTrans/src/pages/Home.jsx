import "./Home.css";

export default function Home() {
  const news = [
    {
      title: "На Стуса відновили рух громадського транспорту",
      desc: "Рух громадського транспорту по вулиці Василя Стуса був перекритий у зв’язку з ліквідацією наслідків ракетної атаки 19 листопада.",
      date: "27.11.2025",
      link: "https://te.20minut.ua/DTP/na-stusa-vidnovili-ruh-gromadskogo-transportu-11980584.html"
    }
  ];

  return (
    <div className="news_wrapper">
      <h2>Останні новини</h2>

      <div className="news_list">
        {news.slice(0, 4).map((item, i) => (
          <div key={i} className="news_item">
            
            <div>
              <h3 className="news_title">{item.title}</h3>
              <p className="news_desc">{item.desc}</p>
              <span className="news_date">{item.date}</span>
            </div>

            <a href={item.link} className="news_link">
              →
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}