import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/CollectionItem.component";
import { withRouter } from "react-router-dom";

const CollectionPreview = ({ title, items, routeName, match, history }) => {
  return (
    <div className="collection__preview">
      <h3
        className="collection__title"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h3>

      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  );
};

export default withRouter(CollectionPreview);
