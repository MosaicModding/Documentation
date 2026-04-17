import React from "react";

export default function SpawnConfig(props: any) {
    return (
        <div className="item-card">
            {props.title && (
                <div className="item-card__header">
                    <h3 className="item-card__title">{props.title}</h3>
                </div>
            )}
            {props.dim && (
                <div className="item-attribute-card__content">
                    <div>
                        <b>Dimension:</b> {props.dim}
                    </div>
                </div>
            )}
            {props.amount && (
                <div className="item-attribute-card__content">
                    <div>
                        <b>Spawn Amount:</b> {props.amount}
                    </div>
                </div>
            )}
            {props.spawnRules && (
                props.spawnRules.map((item: string) =>
                    <div className={"item-attribute-card__content"}>
                        {item}
                    </div>
                )
            )}
        </div>
    );
}

export enum Dimension {
    Overworld = "Overworld",
    Nether = "The Nether",
    End = "The End"
}