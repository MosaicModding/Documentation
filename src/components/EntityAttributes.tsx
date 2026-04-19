import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import Hearts from "@site/src/components/Hearts";

export default function EntityAttributes(props: any) {
    return (
        <div className="item-card">
            {props.title && (
                <div className="item-card__header">
                    <h3 className="item-card__title">{props.title}</h3>
                </div>
            )}
            {props.health && (
                <div className="item-attribute-card__content">
                    <b>Health:&nbsp;</b><Hearts amount={props.health}/>
                </div>
            )}
            {props.behavior && (
                <div className="item-attribute-card__content">
                    <div>
                        <b>Behavior: </b>{props.behavior}
                    </div>
                </div>
            )}
            {props.attacks && (
                <div className="item-attribute-card__content">
                    <div>
                        <b>Attack Strength:</b> {props.attacks.map((item: Damage) =>
                            <div className={"attack-card"}>
                                <div className={"attack-header"}>
                                    <h4>{item.type}</h4>
                                    {item.weapontype !== null && item.weapontype !== undefined && (
                                        <img
                                            src={useBaseUrl("/img/" + item.weapontype + ".png")}
                                            alt={item.weapontype + " icon"}
                                        />
                                    )}
                                </div>
                                <ul>
                                    <li>Easy:<Hearts amount={item.easy}/></li>
                                    <li>Normal:<Hearts amount={item.normal}/></li>
                                    <li>Hard:<Hearts amount={item.hard}/></li>
                                </ul>
                            </div>
                    )}
                    </div>
                </div>
            )}
            {props.speed && (
                <div className="item-attribute-card__content">
                    <div>
                        <b>Speed:</b> {props.speed.map((item: string) =>
                        <p>{item}</p>
                    )}
                    </div>
                </div>
            )}
        </div>
    );
}

export enum MobBehavior {
    Passive = "Passive",
    Neutral = "Neutral",
    Hostile = "Hostile"
}

interface Damage {
    type: WeaponType;
    weapontype: string | null;
    easy: number | string;
    normal: number | string;
    hard: number | string;
}


export enum WeaponType {
    Ranged = "Ranged",
    Melee = "Melee",
    Unarmed = "Unarmed"
}
