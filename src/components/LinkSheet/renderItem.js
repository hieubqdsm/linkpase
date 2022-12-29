import "../../css/main.css";
import { outFunc } from '../utils/copyButton';


const renderItem = (pase) => {
    <div className="element" key={pase["STT"].toString()}>
        < div className="title" > {pase["Title"]} </div >

        <input type="text" value={pase["Link"]} id={parseInt(pase["STT"])} style={{ display: 'none' }} readOnly></input>
        <a href={pase["Link"]}>{pase["Link"]}</a>

        <div className="tooltip">
            <button className="button-4" onClick={() => navigator.clipboard.writeText(pase["Link"])} onMouseOut={outFunc(pase["STT"])} >
                <span className="tooltiptext" id={"myTooltip" + pase["STT"]}>Copy to clipboard</span>
                Copy Link
            </button>
        </div>
        <textarea readOnly disabled defaultValue={pase["Description"].replace(/^\s+|\s+$/gm, '').trim()}></textarea>
    </div>
}

export default renderItem;