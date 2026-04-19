import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

function calculateHearts(count: number) {
    const full = Math.floor(count / 2);
    const half = count % 2;
    return { full, half };
}

export default function Hearts(props: any) {
    const fullImage = useBaseUrl("/img/full_heart.png");
    const halfImage = useBaseUrl("/img/half_heart.png");
    let heartAmount = calculateHearts(props.amount);
    return (
        <div className={"hearts"}>
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