import React from "react";
import useBaseUrl from '@docusaurus/useBaseUrl';


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
                        alt={props.title}
                        className="item-card__image"
                    />
                </div>
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