import React from "react";
import "./trendyImages.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import MenuItem from "../menuItem/MenuItem.component";

const TrendyImages = ({ sections }) => {
  return (
    <div className="trendy-images" id="trendy_images">
      {sections.map(({ id, ...otherSectionProps }) => {
        return (
          // <MenuItem
          //   key={section.id}
          //   title={section.title}
          //   imageUrl={section.imageUrl}
          // />
          <MenuItem key={id} {...otherSectionProps} />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(TrendyImages);
