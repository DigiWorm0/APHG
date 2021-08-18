import React from 'react';
import TitleBar from '../../Layout/TitleBar/TitleBar';
import Game from '../Game';
import './AddPlayerPopup.css';

class AddPlayerPopup extends React.Component
{
    lastImageUpload: string;

    constructor(props: any)
    {
        super(props);
        this.lastImageUpload = "/APHG/placeholder.jpg";
    }

    static open()
    {
        let popup = document.getElementById("playerpopup") as HTMLDivElement;
        popup.style.opacity = "1";
        popup.style.marginLeft = "0";
    }

    uploadImg()
    {
        let popupImg = document.getElementById("playerpopup-img") as HTMLInputElement;
        let imgFiles = popupImg.files as FileList;
        if (imgFiles.length < 0)
            return;
        
        let file = imgFiles[0];
        let reader = new FileReader();
        reader.onload = ((e) => {
            this.lastImageUpload = (e.target as FileReader).result as string;

            let preview = document.getElementById("playerpopup-preview") as HTMLImageElement;
            preview.src = this.lastImageUpload;
        });
        reader.readAsDataURL(file);
    }

    add()
    {
        let popupName = document.getElementById("playerpopup-name") as HTMLInputElement;

        Game.addPlayer(popupName.value, this.lastImageUpload);

        this.close();
    }

    close()
    {
        let popup = document.getElementById("playerpopup") as HTMLDivElement;
        popup.style.opacity = "0";
        setTimeout(() => popup.style.marginLeft = "100vw", 200);
        
    }

    render()
    {
        return (
            <div className="playerpopup" id="playerpopup">
                <div className="playerpopup-background"></div>

                <div className="playerpopup-window container-fluid">
                    <TitleBar title="Add Contestant" />
                    <div className="row">
                        <div className="col-sm-6 p-3">
                            <form action="#" onSubmit={() => this.add()} >
                                <label className="form-label fs-4" htmlFor="playerpopup-name">Name</label>
                                <input className="form-control" type="text" id="playerpopup-name" maxLength={12} />

                                <label className="form-label fs-4 mt-3" htmlFor="playerpopup-img">Image</label>
                                <input className="form-control" type="file" id="playerpopup-img" onInput={() => this.uploadImg()} />
                            </form>
                            
                            <button className="btn btn-primary m-2 mt-4" onClick={() => this.add()}>
                                + Contestant
                            </button>
                            <button className="btn btn-warning m-2 mt-4" onClick={() => this.close()}>
                                Close
                            </button>
                        </div>
                        <div className="col-sm-6">
                            <img className="playerpopup-preview m-2" id="playerpopup-preview" src="/APHG/placeholder.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddPlayerPopup;
