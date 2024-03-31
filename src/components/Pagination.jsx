import "./Pagination.css";
function Pagination({pages,setPages, filteredCoins}) {
  return (
    <div className="span-style">
     <span className={pages === 1 ? "span-button" : ""} onClick={() => setPages(pages - 1)}>
        ⏮️
      </span>
      {[...Array(parseInt(filteredCoins.length / 100))].map((_, i) => (
        <span onClick={() => setPages(i + 1)} className={pages === i + 1 ? "pagination-selected" : ""} key={i}>
          {i + 1}
        </span>
      ))}
      <span className={pages === (parseInt(filteredCoins.length/100)) ? "span-button" : ""} onClick={() => setPages(pages + 1)}>
        ⏭️
      </span>
    </div>
  );
}

export default Pagination;