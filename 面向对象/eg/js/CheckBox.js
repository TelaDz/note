export default class CheckBox extends EventTarget{
    _checked = false;
    constructor() {
        this.elem = this.createElement();
    }
    createElement() {
        if (this.elem) return this.elem;
        let elem = document.createElement("div");
        Object.assign(elem.style, {
            width: "49px",
            height: "49px",
            backgroundImage: "url(./img/common.png)",
            backgroundPositionX: '-245px',
            backgroundPositionY: '-241px',
        });
        elem.addEventListener("click", e => {
            this.clickHandler(e)
        });
        return elem;
    }
    appendTo(parent) {
        parent.appendChild(this.elem);
    }

    set checked(value) {
        this._checked = value;
        this.elem.style.backgroundPositionX = value ? "-296px" : "-245px"
    }
    get checked() {
        return this._checked;
    }

    clickHandler(e) {
        e.stopPropageation();
        this.checked = !this.checked;
    
    }
}