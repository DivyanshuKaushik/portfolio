import React from 'react'
import styled,{css} from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import {Skills} from './Data'

const AboutTab = () => {
    return (
        <>
            <STabs
                selectedTabClassName='is-selected'
                selectedTabPanelClassName='is-selected'
            >
                <STabList>
                    {Skills.map((tab, i) => {
                        return (
                            <STab key={i}>{tab.tabTitle}</STab>
                        )
                    })}
                </STabList>
                {Skills.map(({ tabTitle,data }, i) => {
                    return (
                        <STabPanel key={i} title={tabTitle}> 
                            {data.map(({ heading, subheading, details }, i) => {
                                return (
                                    <div key={i} className="data">
                                        <h4>{heading}<span> - {subheading}</span></h4>
                                        <p>{details}</p>
                                    </div>
                                )
                            })}
                        </STabPanel>
                    )
                })}
            </STabs>
        </>
    )
}

export default AboutTab

const STabs = styled(Tabs)`
    
`;

const STabList = styled(TabList)`
    display: flex;
    margin: .8em 0;
    width: 100%;
`;
STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
    list-style: none;
    margin-right:2em;
    font-size: 1.2em;
    font-weight: 500;
    cursor: pointer;
    transition: all .5s ease;
    position: relative;
    &:after{
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        bottom: 0;
        margin-bottom: -6px;
        left: 0;
        background: #f9004d;
        z-index: 1;
        transform: scaleX(0);
        opacity: 1;
        visibility: visible;
        transition: all 250ms cubic-bezier(0.25,0.45,0.49,0.50);
        transform-origin: left ;
    }
    &.is-selected {
        &:after{
            transform: scaleX(1);
        }
        /* color: #f9004d; */
    }
    &:hover{
        &:after{
            transform: scaleX(1);
        }
        color: #f9004d;
    }
    @media screen and (max-width:768px){
        font-size: 1em;
        /* margin-right: .5em; */
    }
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`
    display: none;
    height: 42vh;
    margin-top: 1.5em;
    overflow-y: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
    background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
    &.is-selected {
        ${props=>props.title ==="Main Skills" ? css`
        display: grid;grid-template-columns: repeat(2, 1fr);` : css`
        display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        `}
        ${'' /* display: flex;
        flex-direction: row;
        flex-wrap: wrap; */}
        ${'' /* display: grid;
        grid-template-columns: repeat(2, 1fr); */}

    }
    .data{
        margin:0.5em;
        min-width:22em;
        color: rgba(198,201,216,.8);
        h4{
            margin: .75em 0;
            font-weight: 800;
            span{
                font-weight: 300;
            }
        }
        p{
            font-weight: 300;
            line-height: 1.35;
        }
    }
    @media screen and (max-width:1200px){
        .data{
            ${'' /* width: 100%; */}
            grid-column: span 2;
        }
    }
`;
STabPanel.tabsRole = 'TabPanel';
