let onOpenMenuClick =()=> {
 document.getElementById('menu__nav-box-id').style.cssText = `
 top: 0px;
 transition: .2s;`;
}

let onCloseMenuClick =()=> {
 document.getElementById('menu__nav-box-id').style.cssText = `
 top: -10000px; transition: .2s;`;
}