function Header() {
  let words = ["О нас", "Услуги", "Аренда"];

  return (
    <div className="">
      <header className="">
        <div className=""></div>
        <ul>
          {words.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
        <button className="">Связаться</button>
      </header>
    </div>
  );
}

export default Header;
