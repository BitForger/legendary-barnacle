import React, {Component, ReactNode} from "react";
import {Column, Grid, Row} from "carbon-components-react";
import './HomePage.scss'

export class HomePage extends Component<any, any> {
    render(): ReactNode {
        return <Grid id={'footer'}>
            <Row>
                <Column lg={6} md={6} sm={6}>
                    <h2 className="bx--type-productive-heading-06">Hello</h2>
                    <p>I work on a bunch of different projects ranging from electron based desktop applications to ruby
                        web applications. I have also had some Minecraft modding projects in the past.</p>
                </Column>
            </Row>
            <Row>
                <Column lg={{span: 6, offset: 6}} md={{span: 6, offset: 6}} sm={{span: 6, offset: 6}}>
                    <h2 className="bx--type-productive-heading-06">About Me</h2>
                    <p>My name is Noah Kovacs and I'm a developer based out of the USA. I have been building websites
                        for the past 5 years for various hobbies and services. I currently work professionally as a full
                        stack engineer and this is the home of my personal projects. You can find info on some of
                        my (old) Minecraft mods as well as my other web development projects.</p>
                </Column>
            </Row>
        </Grid>
    }
}
