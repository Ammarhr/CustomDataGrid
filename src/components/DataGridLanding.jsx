import { React, createElement, ReactElement, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Table from "react-bootstrap/Table";

export function HelloWorldSample(props) {
    const [personDetails, setPersonDetails] = useState({});
    let data;
    useEffect(() => {
        if (props.datasource) {
            console.info(props.columns, "props.columns");
            if (props.datasource?.status === "available") {
                console.info(props.datasource?.items, "items");
                data = props.datasource?.items.map(item => {
                    let obj = {};
                    for (let index = 0; index < props.columns.length; index++) {
                        const element = props.columns[index];
                        console.info(element.attribute?.get(item), "element", index);
                        obj[element?.header?.status == "available" ? element?.header?.value : ""] =
                            element.attribute?.get(item);
                    }
                    return obj;
                });
            }
            console.info(data, "data");
            setPersonDetails(data);
        }
    }, [props.datasource]);
    // bagination:

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>#</th>
                    {props?.columns?.map(item => {
                        return <td>{item?.header?.status == "available" ? item?.header?.value : ""}</td>;
                    })}
                </tr>
            </thead>
            <tbody>
                {personDetails && personDetails.length ? (
                    personDetails.map((person, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                {Object.keys(person).map(item => {
                                    return <td>{person[item]?.value}</td>;
                                })}
                            </tr>
                        );
                    })
                ) : (
                    <h1>Helleo</h1>
                )}
            </tbody>
        </Table>
    );
}
