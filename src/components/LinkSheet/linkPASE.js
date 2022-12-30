import "../../css/main.css";
import useGoogleSheets from 'use-google-sheets';
import  renderItem  from "./renderItem";
//sheetsOptions: [{ id: 'Sheet1' }],
const App = () => {
    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_API_KEY,
        sheetId: process.env.REACT_APP_SHEET_ID,
        sheetsOptions: [{ id: 'PASE' }],
    });
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }

    let arr_str = JSON.stringify(data);
    let arr = JSON.parse(arr_str);

    <div class="segment">
    </div>
    const listItems = arr[0]['data'].map((pase) =>
            <div>
            {renderItem(pase)}
            </div>       

    );
    return (
        <div className="X">
            <h1>PASE</h1>
            <div className="segment">
                {listItems}
            </div>

        </div>
    );
};


export default App;