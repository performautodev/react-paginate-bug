import ReactPaginate from "react-paginate";
import { useNavigate, useLocation } from "react-router-dom";

import "./styles.css";

export default function App() {
  let location = useLocation();

  let navgateTo = useNavigate();

  let pathname = `${location.pathname}`;

  const first = 10;

  const onPageChangeClick = (newPage) => {
    const search = `?skip=${newPage.selected * +first}&first=${+first}&page=${
      newPage.selected + 1
    }`;
    navgateTo(pathname + search);
  };

  return (
    <div className="App">
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        initialPage={1}
        breakClassName={"break-me"}
        pageCount={15}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(newPage) => onPageChangeClick(newPage)}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
