alert("U-Portfolio Enhancer가 작동 중입니다.")
window.onbeforeunload = function(e) {
    e.preventDefault();
    return true;
};