import "../../css/main.css";
import { outFunc } from '../utils/copyButton';
import React, {
    FC,
} from 'react';

interface Props {
    language: string;
    survey_tag: string;
}
const DataDisplay = ({props}) => {
    <div className="element" key={props["STT"].toString()}>
        < div className="title" > {props["Title"]} </div >

        <input type="text" value={props["Link"]} id={parseInt(props["STT"])} style={{ display: 'none' }} readOnly></input>
        <a href={props["Link"]}>{props["Link"]}</a>

        <div className="tooltip">
            <button className="button-4" onClick={() => navigator.clipboard.writeText(props["Link"])} onMouseOut={outFunc(props["STT"])} >
                <span className="tooltiptext" id={"myTooltip" + props["STT"]}>Copy to clipboard</span>
                Copy Link
            </button>
        </div>
        <textarea readOnly disabled defaultValue={props["Description"].replace(/^\s+|\s+$/gm, '').trim()}></textarea>
    </div>
}

export default DataDisplay;