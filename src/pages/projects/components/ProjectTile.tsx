import React, {Component} from "react";
import {ClickableTile, Tag} from "carbon-components-react";
import './ProjectTile.scss'

interface Props {
    project: any
}

export class ProjectTile extends Component<Props, any> {
    render() {
        return <ClickableTile className={'project-tile'} href={this.props.project.url}>
            <h3 className={'project-tile__header'}>{this.props.project.name}</h3>
            <p className={'project-tile__description'}>{this.props.project.description}</p>
            <div className={'project-tile__languages'}>
                {this.props.project.languages.nodes.map((value: { name: string | undefined; color: any; }) => <Tag
                    key={value.name} type={'blue'}>{value.name}</Tag>)}
            </div>
        </ClickableTile>
    }
}
