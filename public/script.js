var Input = document.getElementById("userInput");
var Output = document.getElementById("md5Output");
var CopyButton = document.getElementById("copyButton");
CopyButton.disabled = true;

var hash = CryptoJS.MD5("MyMessage");
// alert(hash);
function copyFunction() {
    var copyText = document.getElementById("md5Output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    CopyButton.innerHTML = "Md5 Hash Copied !";
    setTimeout(function () {
        CopyButton.innerHTML = "Copy";
        Input.focus();
    }, 1000);
}

Input.addEventListener("input", function () {
    if (this.value != "") {
        CopyButton.disabled = false;
        Output.value = CryptoJS.MD5(this.value);
        hash = CryptoJS.MD5(this.value);
    }
    else {
        Output.value = "";
        CopyButton.disabled = true;
    }

});

document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        document.title = "~~~ Hasher by Sanjay Kumar ~~~";
    } else {
        Input.focus();
        document.title = "Online Md5 hash generator";
    }
});