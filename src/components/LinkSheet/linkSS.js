import "../../css/main.css";
import useGoogleSheets from 'use-google-sheets';
import { outFunc } from '../utils/copyButton';

//sheetsOptions: [{ id: 'Sheet1' }],
const App = () => {
    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_API_KEY,
        sheetId: process.env.REACT_APP_SHEET_ID,
        sheetsOptions: [{ id: 'SS' }],
    });
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }

    let arr_str = JSON.stringify(data);
    let arr = JSON.parse(arr_str);
    let i = 1;

    <div class="segment">
    </div>
    const listItems = arr[0]['data'].map((pase) =>

        <div className="element" key={pase["STT"].toString()}>
            < div className="title" > {pase["Title"]} </div >

            <input type="text" value={pase["Link"]} id={parseInt(pase["STT"])} style={{ display: 'none' }} readOnly></input>
            <a href={pase["Link"]}>{pase["Link"]}</a>

            <div className="tooltip">
                <button className="button-4" onClick={() =>  navigator.clipboard.writeText(pase["Link"])} onMouseOut={outFunc(pase["STT"])} >
                    <span className="tooltiptext" id={"myTooltip" + pase["STT"]}>Copy to clipboard</span>
                    Copy Link
                </button>
            </div>
            <textarea readOnly disabled defaultValue={pase["Description"].replace(/^\s+|\s+$/gm, '').trim()}></textarea>
        </div>
    );
    return (
        <div className="X">
            <h1>Sponsor & Selling</h1>
            <div className="segment">
                {listItems}
            </div>

        </div>
    );
};


export default App;