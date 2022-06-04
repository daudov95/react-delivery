import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props: any) => (
    <ContentLoader
        speed={2}
        width={342}
        height={243}
        viewBox="0 0 342 243"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="340" height="170" />
        <rect x="0" y="187" rx="0" ry="0" width="340" height="21" />
        <rect x="0" y="225" rx="0" ry="0" width="110" height="18" />
        <rect x="238" y="225" rx="0" ry="0" width="61" height="18" />
        <rect x="133" y="225" rx="0" ry="0" width="80" height="22" />
    </ContentLoader>
);

export default Skeleton;
