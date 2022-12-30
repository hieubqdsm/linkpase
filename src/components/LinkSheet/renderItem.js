import "../../css/main.css";
import { outFunc } from '../utils/copyButton';

const renderItem = (pase) => {
    return (
        <div className="element" key={pase["STT"].toString()}>
            < div className="title" > {pase["Title"]} </div >
            <p>
                <input type="text" value={pase["Link"]} id={parseInt(pase["STT"])} style={{ display: 'none' }} readOnly></input>
                <a href={pase["Link"]}>{pase["Link"]}</a>
            </p>
            <div className="tooltip">
                <button className="button-4" onClick={() => navigator.clipboard.writeText(pase["Link"])} onMouseOut={outFunc(pase["STT"])} >
                    <span className="tooltiptext" id={"myTooltip" + pase["STT"]}>Copy to clipboard</span>
                    Copy Link
                </button>
            </div>
            <textarea readOnly disabled defaultValue={pase["Description"].replace(/^\s+|\s+$/gm, '').trim()}></textarea>
            <p>
                Tags: {pase["Tags"]}
            </p>
        </div>
    )
}

export default renderItem ;