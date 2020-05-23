import React, {Component, ReactNode} from "react";
import {
    Header as CarbonHeader,
    HeaderName,
    HeaderNavigation,
    SkipToContent,
    HeaderMenuItem,
    HeaderGlobalBar
} from "carbon-components-react";
import {Link, LinkProps as RRLinkProps} from "react-router-dom";

export class Header extends Component<any, any>{
    render(): ReactNode {
        // @ts-ignore
        return <CarbonHeader aria-label={'Top navigation'}>
            <SkipToContent href="#main-content">Skip to content</SkipToContent>
            <HeaderName<RRLinkProps> element={Link} to={"/"} prefix={"Noah Kovacs"}>Home</HeaderName>
            <HeaderNavigation aria-label={'Primary nav bar'}>
                <HeaderMenuItem<RRLinkProps> element={Link} to={"/projects"}>Projects</HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar />
        </CarbonHeader>
    }
}
