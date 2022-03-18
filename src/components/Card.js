
import React from "react"

export default function Card(props){
    return (
        <div className="jornal">
            <img alt="" src={`../images/${props.item.imgPath}`} className="feature--img"/>
            <div className="jornal--info">
                <img alt="" src={props.item.placeholder} className="placeholder-img"/>
                <span className="location--name">{props.item.location}</span>
                <a href="{props.item.googleMapsUrl}">View on Google Maps</a>
                <span className="title--name">{props.item.title}</span>
                <span className="dates--available">{props.item.startDate} - {props.item.endDate}</span>
                <span className="feature--description">{props.item.description}</span>
            </div>
            <span><hr /></span>
        </div>
    )
}