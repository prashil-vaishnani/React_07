import "./Pagination.css";
import { memo } from "react";

const Pagination = (props: { paginationItems: JSX.Element[] | undefined }) => {
  return (
    <div className="paginationItemsWrapper">
      <span>&laquo;</span>
      {props.paginationItems}
      <span>&raquo;</span>
    </div>
  );
};
export default memo(Pagination);
