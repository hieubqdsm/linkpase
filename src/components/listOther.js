import "../css/main.css";
import { link_pase } from "./data";
const listItems = link_pase.map((pase) =>
    <li class="sgLi">
        <div class="box">
            <h3>Ngày {pase["date"]}</h3>
            <h4>Product</h4>
            {pase["product"].map((paseProduct) =>
                <ul class="df">
                    <li>{paseProduct["author"]} : {paseProduct["product"]}</li>
                </ul>)}
            <h4>Training</h4>
            {pase["training"].map((paseTopic) =>
                <ul class="df">
                    <li>{paseTopic["author"]} : {paseTopic["topic"]}</li>
                </ul>)}
        </div>
    </li>
);
function ListLink() {

    return (
        <div class="X">
            <h1>List Pase</h1>
            <ul class="SG">
                {listItems}
            </ul>
        </div>
    );
}
export default ListLink;