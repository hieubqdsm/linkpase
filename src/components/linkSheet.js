import "../css/main.css";
import useGoogleSheets from 'use-google-sheets';
//sheetsOptions: [{ id: 'Sheet1' }],
const App = () => {
    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_API_KEY,
        sheetId: process.env.REACT_APP_SHEET_ID,
    });
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }

    let arr_str = JSON.stringify(data);
    let arr = JSON.parse(arr_str);

    const listItems = arr[0]['data'].map((pase) =>
    <li class="sgLi">
        <div class="box">
            <h3>Ngày {pase["Description"]}</h3>
            
        </div>
    </li>
);
    return (
        <div class="X">
            <h1>{listItems}</h1>
        </div>
    );
};


export default App;