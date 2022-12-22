const copyUrl = (id) => {
    var copyText = document.getElementById(parseInt(id));
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip" + id);
    tooltip.innerHTML = "Copied";
}

const outFunc = (id) => {
    var tooltip = document.getElementById("myTooltip" + parseInt(id));
    tooltip.innerHTML = "Copy to clipboard";
}

export {copyUrl};
export {outFunc};