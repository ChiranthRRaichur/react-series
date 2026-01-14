const MenuShimmer = () => {
  return (
    <div className="menu-page">
      {/* header shimmer */}
      <div className="menu-header">
        <div className="menuShimmer-title shimmer-bg"></div>

        <div className="menuShimmer-meta">
          <div className="menuShimmer-pill shimmer-bg"></div>
          <div className="menuShimmer-line shimmer-bg"></div>
        </div>
      </div>

      {/* menu categories shimmer */}
      {Array(3)
        .fill("")
        .map((_, idx) => (
          <div className="menu-category" key={idx}>
            <div className="menuShimmer-category shimmer-bg"></div>

            <ul className="menu-items">
              {Array(4)
                .fill("")
                .map((__, j) => (
                  <li className="menu-item" key={j}>
                    <div className="item-left">
                      <div className="menuShimmer-itemName shimmer-bg"></div>
                      <div className="menuShimmer-itemDesc shimmer-bg"></div>
                    </div>

                    <div className="item-right">
                      <div className="menuShimmer-price shimmer-bg"></div>
                      <div className="menuShimmer-tag shimmer-bg"></div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default MenuShimmer;
