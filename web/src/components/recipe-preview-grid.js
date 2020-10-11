import { Link } from "gatsby";
import React from "react";
import RecipePreview from "./recipe-preview";

import styles from "./recipe-preview-grid.module.css";

function RecipePreviewGrid(props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <RecipePreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

RecipePreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default RecipePreviewGrid;
