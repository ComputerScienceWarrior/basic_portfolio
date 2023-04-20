import React from "react";

const Project = (props) => {
    return(
        <div>
            <div>{props.title}</div>
            <img src={props.imgUrl} />
            <div>{props.websiteUrl}</div>
            <div>{props.githubRepo}</div>
            <div>{props.videoDemoUrl}</div>
        </div>
    )
}

export default Project;
