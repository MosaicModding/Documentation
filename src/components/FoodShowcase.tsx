import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import Hunger from "@site/src/components/Hunger";
import Hearts from "@site/src/components/Hearts";

export default function ShowcaseBlock(props: any) {
    return (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div className="item-card">
                {props.title && (
                    <div className="item-card__header">
                        <h3 className="item-card__title">{props.title}</h3>
                    </div>
                )}
                <div className="item-card__content">
                    <img
                        src={useBaseUrl('/' + props.image)}
                        alt={props.image}
                        className="item-card__image"
                    />
                </div>
                {props.nutrition && (
                    <div className="item-attribute-card__content">
                        <b>Nutrition:&nbsp;</b><Hunger amount={props.nutrition}/>
                    </div>
                )}
                {props.saturation && (
                    <div className="item-attribute-card__content">
                        <b>Saturation:&nbsp;</b><Hunger amount={props.saturation}/>
                    </div>
                )}
                {props.always === true && (
                    <div className="item-attribute-card__content">
                        Can always be eaten.
                    </div>
                )}
                {props.dogFood === true && (
                    <div className="item-attribute-card__content">
                        Can be fed to dogs.
                    </div>
                )}
                {props.effects && (
                    <div className="item-attribute-card__content">
                        <div>
                            <b>Effects:</b> {props.effects.map((item: Effect) =>
                            <div>
                                <h5>{item.name}</h5>
                                <ul>
                                    <li>Chance to apply: {item.probability}%</li>
                                    <li>Duration: {item.duration}</li>
                                </ul>
                            </div>
                        )}
                        </div>
                    </div>
                )}
            </div>
            <div>
                {props.children && (
                    <div>
                        {props.children}
                    </div>
                )}
            </div>
        </div>
    );
}

export interface Effect {
    name: string,
    probability: number,
    duration: string
}