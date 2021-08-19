import React from 'react';
import TitleBar from '../../Layout/TitleBar/TitleBar';
import AddCustomEvent from './AddCustomEvent/AddCustomEvent';
import { CUSTOM_EVENTS1 } from '../Event/EventTemplate/EventTemplateDB';
import './CustomEventPopup.css';

class CustomEventPopup extends React.Component
{
    static forceUpdate: Function;

    constructor(props: any)
    {
        super(props);

        CustomEventPopup.forceUpdate = (() => {
            this.setState({});
        }).bind(this);
    }

    static open()
    {
        let popup = document.getElementById("customeventpopup") as HTMLDivElement;
        popup.style.opacity = "1";
        popup.style.marginLeft = "0";
    }

    close()
    {
        let popup = document.getElementById("customeventpopup") as HTMLDivElement;
        popup.style.opacity = "0";
        setTimeout(() => popup.style.marginLeft = "100vw", 200);
        
    }

    remove(index: number)
    {
        CUSTOM_EVENTS1.splice(index, 1);
        CustomEventPopup.forceUpdate();
    }

    render()
    {
        return (
            <div className="customeventpopup" id="customeventpopup">
                <div className="customeventpopup-background"></div>

                <div className="customeventpopup-window container-fluid">
                    <TitleBar title="Custom Events" />
                    <div className="row">
                        <div className="col-sm-12 p-3">
                            <div className="customeventpopup-scrollwindow container-fluid">
                                {CUSTOM_EVENTS1.map((template, index) => {
                                    return (<div className="row">
                                        <div className="col-sm-10">
                                            <p>{template.text}</p>
                                        </div>
                                        <div className="col-sm-2">
                                            <button className="btn btn-danger" onClick={() => this.remove(index)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>);
                                })}
                            </div>
                            <button className="btn btn-primary m-1" onClick={AddCustomEvent.open}>
                                + Custom Event
                            </button>
                            <button className="btn btn-warning m-1" onClick={this.close}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>

                <AddCustomEvent />
            </div>
        );
    }
}
export default CustomEventPopup;
