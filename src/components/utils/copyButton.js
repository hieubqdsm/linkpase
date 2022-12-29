const copyUrl = (id) => {
    console.log('xxxxxx');
    try {
        const copyText = document.getElementById(parseInt(id));
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);

        const tooltip = document.getElementById("myTooltip" + id);
        tooltip.innerHTML = "Copied";

    } catch (error) {
        console.log(error);
    }
}
const outFunc = (id) => {
    try {
        var tooltip = document.getElementById("myTooltip" + parseInt(id));
        tooltip.innerHTML = "Copy to clipboard";
    } catch (error) {
        console.log(error);
    }
}

export { copyUrl };
export { outFunc };