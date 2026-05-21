import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import calculateHalfFull from "@site/src/util/CalculateHalfFull";

export default function Hunger(props: any) {
    const fullImage = useBaseUrl("/img/full_hunger.png");
    const halfImage = useBaseUrl("/img/half_hunger.png");
    let hungerAmount = calculateHalfFull(props.amount);
    return (
        <div className={"mc_icons"}>
            {props.amount} (
            {Array.from({ length: hungerAmount.full }).map((_, index) => (
                <img
                    key={index}
                    src={fullImage}
                    alt={"Full Hunger icon"}
                />
            ))}
            {Array.from({ length: hungerAmount.half }).map((_, index) => (
                <img
                    key={index}
                    src={halfImage}
                    alt={"Half Hunger icon"}
                />
            ))}
            )
        </div>
    );
}