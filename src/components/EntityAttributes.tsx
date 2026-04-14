import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

function calculateHearts(count: number) {
    const full = Math.floor(count / 2);
    const half = count % 2;
    return { full, half };
}

export default function EntityAttributes(props: any) {
    const fullImage = useBaseUrl("/img/full_heart.png");
    const halfImage = useBaseUrl("/img/half_heart.png");
    let heartAmount = calculateHearts(props.health);

    return (
        <div className="item-card">
            <div className="item-card__header">
                <h3 className="item-card__title">{"Attributes"}</h3>
            </div>
            {props.health && (
                <div className="item-card__content">
                    <div>
                        <b>Health:</b> {props.health} (
                    </div>
                    {Array.from({ length: heartAmount.full }).map((_, index) => (
                        <img
                            key={index}
                            src={fullImage}
                            alt={"Full Heart icon"}
                            width={11.25}
                            height={11.25}
                        />
                    ))}
                    {Array.from({ length: heartAmount.half }).map((_, index) => (
                        <img
                            key={index}
                            src={halfImage}
                            alt={"Half Heart icon"}
                            width={11.25}
                            height={11.25}
                        />
                    ))}
                    )
                </div>
            )}
        </div>
    );
}
