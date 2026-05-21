import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import calculateHalfFull from "@site/src/util/CalculateHalfFull";

export default function Hearts(props: any) {
    const fullImage = useBaseUrl("/img/full_heart.png");
    const halfImage = useBaseUrl("/img/half_heart.png");
    let heartAmount = calculateHalfFull(props.amount);
    return (
        <div className={"mc_icons"}>
            {props.amount} (
            {Array.from({ length: heartAmount.full }).map((_, index) => (
                <img
                    key={index}
                    src={fullImage}
                    alt={"Full Heart icon"}
                />
            ))}
            {Array.from({ length: heartAmount.half }).map((_, index) => (
                <img
                    key={index}
                    src={halfImage}
                    alt={"Half Heart icon"}
                />
            ))}
            )
        </div>
    );
}