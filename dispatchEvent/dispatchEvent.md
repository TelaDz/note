```js
static IMG_LOAD_FINISH = "img_load_finish";

let evt = new Event(Utils.IMG_LOAD_FINISH);
evt.list = this.list;
document.dispatchEvent(evt);
return;
```

```js
autoPlay(){
    if(!this.autoBool)return;
    this.time--;
    if(this.time>0) return;
    this.time=300;
    this.bnList[1].dispatchEvent(new MouseEvent("click"));
}
//1014 轮播图案例
```

```js
clickHandler(e) {
    e.stopPropagation();
    this.checked = !this.checked;
    this.dispatchEvent(new Event("change"));
} //js类中

ck.addEventListener("change", changeHandler); //script中

//1014 多选和单选案例
```

```js
dispatch(){
        let evt=new Event(StepNumber.STEP_NUMBER_CHANGE);
        this.dispatchEvent(evt);
    }
static get STEP_NUMBER_CHANGE(){
        return "step_number_change";
    }
// 设置数量框案例
```

```js
set selectedIndex(value){
        this._selectedIndex=value;
        this.menuTxt.textContent=this.data[value];
        let evt=new Event(Menu.SELECTED_CHANGE_EVENT);
        evt.selectedIndex=value;
        evt.selectedItem=this.selectedItem;
        this.dispatchEvent(evt);
    }

    //下拉菜单案例
static get SELECTED_CHANGE_EVENT(){
        return "selected_change_event";
    }

```
