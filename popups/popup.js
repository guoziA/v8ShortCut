
var shortcut = new Array();
var searchShort = new Array();
//添加快捷键信息在这里
shortcut.push(new shortCut("Q", "选中中文翻译"));
shortcut.push(new shortCut("F1", "主页"));
shortcut.push(new shortCut("F2", "复制当前标签页"));
shortcut.push(new shortCut("F3", "查看页面信息"));
shortcut.push(new shortCut("F4", "关当前标签声音"));
shortcut.push(new shortCut("F6", "切换壁纸"));
shortcut.push(new shortCut("F8", "启动翻译"));
shortcut.push(new shortCut("F9", "打开标签组"));
shortcut.push(new shortCut("Alt+F1", "关闭左侧所有标签页"));
shortcut.push(new shortCut("Alt+F2", "关闭右侧所有标签页"));
shortcut.push(new shortCut("Alt+F3", "关闭其他标签页"));
shortcut.push(new shortCut("Alt+`", "Pin/UnPin当前标签"));
shortcut.push(new shortCut("Alt+1", "上一标签"));
shortcut.push(new shortCut("Alt+2", "下一标签"));
shortcut.push(new shortCut("Alt+3", "恢复关闭的标签"));
shortcut.push(new shortCut("Alt+4", "关闭当前页"));
shortcut.push(new shortCut("Alt+A", "护眼模式"));
shortcut.push(new shortCut("Alt+S", "夜间模式"));
shortcut.push(new shortCut("Alt+E", "阅读模式"));
shortcut.push(new shortCut("Alt+X", "前进"));
shortcut.push(new shortCut("Alt+Z", "后退"));
shortcut.push(new shortCut("Ctrl+Alt+A", "截图"));
shortcut.push(new shortCut("Ctrl+Shift+Alt+A", "隐藏火狐截图"));
shortcut.push(new shortCut("Ctrl+Alt+Q", "完整截图"));
shortcut.push(new shortCut("Ctrl+Alt+S", "GIF截图"));
shortcut.push(new shortCut("Ctrl+Alt+F", "搜索本机文件"));
shortcut.push(new shortCut("Ctrl+VK_DOWN", "暂停or开始快捷键"));
shortcut.push(new shortCut("Alt+VK_UP", "开始快捷键"));
shortcut.push(new shortCut("Alt+VK_DOWN", "暂停快捷键"));
shortcut.push(new shortCut("Alt+VK_LEFT", "上一曲"));
shortcut.push(new shortCut("Alt+VK_RIGHT", "下一曲"));
shortcut.push(new shortCut("Alt+VK_INSERT", "喜欢"));
shortcut.push(new shortCut("Alt+VK_DELETE", "讨厌"));

FillTable(shortcut);

document.getElementById("searchText").value = "";
document.getElementById("css").href = "popup.css";

document.getElementById("searchText").addEventListener("input", function(){
    Search(document.getElementById("searchText").value);
}, false);

function addRow(key, description){
    var row = document.createElement("tr");
    var keycol = document.createElement("td");
    keycol.textContent = key;
    keycol.id = "key";
    var descol = document.createElement("td");
    descol.textContent = description;
    descol.id = "des";

    row.appendChild(keycol);
    row.appendChild(descol);

    document.getElementById("tableBody").appendChild(row);
}

function Search(str){
    var matchStr = "";
    var splitStr = str.toLowerCase().split(" ");
    if(str == ""){
        document.getElementById("tableBody").textContent = "";
        FillTable(shortcut);
        return;
    }

    document.getElementById("tableBody").textContent = "";
    
    for(var j = 0; j < splitStr.length; j++){
        for(var i = 0; i < shortcut.length; i++){
            if((shortcut[i].key.toLowerCase().search(splitStr[j]) != -1) || (shortcut[i].des.toLowerCase().search(splitStr[j]) != -1)) {
                addRow(shortcut[i].key, shortcut[i].des);
                console.log(shortcut[i].key + ": " + splitStr[j]);
            }
        }
    }
}
function shortCut(key, des){
    this.key = key;
    this.des = des;
}

function FillTable(shortcuts){
    for(i = 0; i < shortcuts.length; i++){
        addRow(shortcuts[i].key, shortcuts[i].des);
    }
}