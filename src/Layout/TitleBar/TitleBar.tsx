import React from 'react';
import './TitleBar.css';

interface TitleBarProps
{
    title: string;
}

class TitleBar extends React.Component<TitleBarProps>
{
    title: string;

    constructor(props: TitleBarProps)
    {
        super(props);
        this.title = props.title;
    }

    setTitle(title: string)
    {
        this.title = title;
    }

    render()
    {
        return (
            <div className="row bg-blue text-white p-4 titlebar">
                <div className="col-sm-10 offset-sm-1 text-center">
                    <h2>{this.title}</h2>
                </div>
            </div>
        );
    }
}
export default TitleBar;
