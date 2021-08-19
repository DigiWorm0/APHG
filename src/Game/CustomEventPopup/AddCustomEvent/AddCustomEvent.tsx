import React from 'react';
import TitleBar from '../../../Layout/TitleBar/TitleBar';
import EffectType from '../../Event/EventTemplate/EffectType';
import EventTemplate from '../../Event/EventTemplate/EventTemplate';
import { CUSTOM_EVENTS1 } from '../../Event/EventTemplate/EventTemplateDB';
import CustomEventPopup from '../CustomEventPopup';
import './AddCustomEvent.css';

class AddCustomEvent extends React.Component
{
    static forceUpdate: Function;
    formPlayerCount: number;

    constructor(props: any)
    {
        super(props);
        this.formPlayerCount = 1;

        AddCustomEvent.forceUpdate = (() => {
            this.setState({});
        }).bind(this);
    }

    static open()
    {
        let popup = document.getElementById("addcustomevent") as HTMLDivElement;
        popup.style.opacity = "1";
        popup.style.marginLeft = "0";
    }

    close()
    {
        let popup = document.getElementById("addcustomevent") as HTMLDivElement;
        popup.style.opacity = "0";
        setTimeout(() => popup.style.marginLeft = "100vw", 200);
        
    }

    onFormChange()
    {
        let elemPlayerCount = document.getElementById("addcustomevent-count") as HTMLSelectElement;
        this.formPlayerCount = parseInt(elemPlayerCount.value);
        AddCustomEvent.forceUpdate();
    }

    addCustomEvent()
    {
        let elemFormText = document.getElementById("addcustomevent-text") as HTMLInputElement;
        let elemFormItem = document.getElementById("addcustomevent-item") as HTMLInputElement;
        let formText = elemFormText.value;
        let formItem = elemFormItem.value;
        let formEffects: EffectType[] = [];
        for (let i = 0; i < this.formPlayerCount; i++)
        {
            let elemFormEffect = document.getElementById("addcustomevent-effect" + i) as HTMLSelectElement;
            let effect = parseInt(elemFormEffect.value) as EffectType;
            formEffects.push(effect);
        }

        CUSTOM_EVENTS1.push(new EventTemplate(formText, formEffects, this.formPlayerCount, formItem === "" ? undefined : formItem));
        CustomEventPopup.forceUpdate();
        console.log(CUSTOM_EVENTS1);
        this.close();
    }

    render()
    {
        let effectList = [];
        for (let i = 0; i < this.formPlayerCount; i++)
            effectList.push(<div className="row mb-1">
                <div className="col-sm-4">
                    <p className="mt-1">Player {i + 1}</p>
                </div>
                <div className="col-sm-8">
                    <select className="form-control" id={"addcustomevent-effect" + i}>
                        <option value="0">None</option>
                        <option value="1">Kill</option>
                        <option value="2">Injure</option>
                        <option value="3">Gain Medicine</option>
                        <option value="4">Gain Weapon</option>
                        <option value="5">Heal</option>
                        <option value="6">Add Teammate</option>
                        <option value="7">Remove Teammate</option>
                    </select>
                </div>
            </div>)

        return (
            <div className="addcustomevent" id="addcustomevent">
                <div className="addcustomevent-background"></div>

                <div className="addcustomevent-window container-fluid">
                    <TitleBar title="+ Custom Event" />
                    <div className="row">
                        <div className="col-sm-12 p-3">
                            <p><b>Player Names:</b> Type <span className="txt-blue">{"{p0}"}</span> for the first player, <span className="txt-blue">{"{p1}"}</span> for the second player, and so on</p>
                            <p><b>Item Names:</b> Type <span className="txt-green">{"{medicine}"}</span> for the medicine name and <span className="txt-red">{"{weapon}"}</span> for the weapon name.<br/>The actual names of each item is entered into the 'Item Name' box</p>
                            <div className="mb-1 p-1">
                                <input className="form-control" type="text" id="addcustomevent-text" placeholder="Text (Ex: '{p0} used a {weapon} to kill {p1}')"/>
                            </div>
                            <div className="mb-1 p-1">
                                <input className="form-control" type="text" id="addcustomevent-item" placeholder="Item Name (ex: 'A Machete')"/>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="addcustomevent-count" className="form-label fw-bold">Player Count</label>
                                        <select id="addcustomevent-count" className="form-control" onChange={this.onFormChange.bind(this)}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label fw-bold">Effects</label>
                                        <div className="container-fluid">
                                            {effectList}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary m-1" onClick={this.addCustomEvent.bind(this)}>
                                + Custom Event
                            </button>
                            <button className="btn btn-warning m-1" onClick={this.close}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddCustomEvent;
