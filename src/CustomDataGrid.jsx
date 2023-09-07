import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/CustomDataGrid.css";

export function CustomDataGrid({
    datasource,
    columns,
    showContentAs,
    attribute,
    pagination,
    pageSize,
    onClick,
    filterList
}) {
    return (
        <HelloWorldSample
            datasource={datasource}
            columns={columns}
            attribute={attribute}
            showContentAs={showContentAs}
            pagination={pagination}
            pageSize={pageSize}
            onClick={onClick}
            filterList={filterList}
        />
    );
}
