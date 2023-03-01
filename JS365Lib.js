/* My JS Library .. JS365Lib.js v1.2.4  2023-03-01 */
"strict";

// URL エスケープ
function escURL(str) {
    str = str.replace(/\s/g, "%20");
    str = str.replace(/#/g, "%23");
    str = str.replace(/\$/g, "%24");
    str = str.replace(/%/g, "%25");
    str = str.replace(/&/g, "%26");
    str = str.replace(/\+/g, "%2B");
    str = str.replace(/\?/g, "%3F");
    return str;
}

// HTML のエスケープ
function escHTML(str) {
  return str.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

// id, type (index) で指定したエレメントを取得する。
function E(id, type="i", index=0) {
  var el = null;
  switch (type) {
    case "i":  // id
      el = document.getElementById(id);
      break;
    case "n":  // name
      el = document.getElementsByName(id)[index];
      break;
    case "c":  // class
      el = document.getElementsByClassName(id)[index];
      break;
    case "t":  // tag
      el = document.getElementsByTagName(id)[index];
      break;
    default:  // id
      el = document.getElementById(id);
      break;
  }
  return el;
}

// 要素の値を得る。
function getValue(id) {
  if (typeof id == "string") {
    const el = document.getElementById(id);
    if (el.value == undefined) {
      return el.innerText;
    }
    else {
      return el.value;
    }
  }
  else if (typeof id == "object") {
    if (id.value == undefined) {
      return id.innerText;
    }
    else {
      return id.value;
    }
  }
  else {
    return undefined;
  }
}

// 要素の値を設定する。
function setValue(id, value, escape=true) {
  if (typeof id == "string") {
    const el = document.getElementById(id);
    if (el.value == undefined) {
      if (escape) {
        if (value == null) {
          el.innerText = "null";
        }
        else {
          el.innerText = value.toString().replaceAll('&', "&amp;").replaceAll('<', "&lt;").replaceAll('>', "&gt;");
        }
      }
      else {
        el.innerHTML = value;
      }
    }
    else {
      el.value = value;
    }
  }
  else if (typeof id == "object") {
    if (id.value == undefined) {
      if (escape) {
        id.innerText = value.toString().replaceAll('&', "&amp;").replaceAll('<', "&lt;").replaceAll('>', "&gt;");
      }
      else {
        id.innerHTML = value;
      }
    }
    else {
      id.value = value;
    }
  }
  else {
    // 何もしない。
  }
}

// HTML文字列をタグの前後に挿入する。
function insertHTML(id, html, position=0) {
  let el = id;
  if (typeof id == "string") {
    el = E(id);
  }
  switch (position) {
    case 0:
      el.insertAdjacentHTML("beforebegin", html);  // 開始タグの直前
      break;
    case 1:
      el.insertAdjacentHTML("afterbegin", html);  // 開始タグの直後
      break;
    case 2:
      el.insertAdjacentHTML("beforeend", html);   // 終了タグの直前
      break;
    case 3:
      el.insertAdjacentHTML("afterend", html);   // 終了タグの直後
      break;
    default:
      break;
  }
}

// 要素を作成する。elem != null の時は、elem の後に追加する。
function create(tag, elem=null) {
  const e = document.createElement(tag);
  if (elem) {
    elem.append(e);
  }
  return e;
}

// 子要素を作成する。
function addChild(parent, tag) {
  let p = parent;
  let c = tag;
  if (typeof parent == "string") {
    p = document.getElementById(parent);
  }
  if (typeof tag == "string") {
    c = document.createElement(tag);
  }
  return p.appendChild(c);
}

// 要素の属性を得る。
function getAttr(id, attr) {
  let el = id;
  if (typeof el == "string") {
    el = document.getElementById(id);
  }
  return el.getAttribute(attr);
}

// 要素の属性を設定する。
function setAttr(id, attr, value) {
  let el = id;
  if (typeof el == "string") {
    el = document.getElementById(id);
  }
  el.setAttribute(attr, value);
}

// 要素の属性を削除する。
function dropAttr(id, attr) {
  let el = id;
  if (typeof el == "string") {
    el = document.getElementById(id);
  }
  el.removeAttribute(attr);
}

// 指定した完全なリクエストパス (URL) から GET メソッドでテキストを得る。
function getText(url, callback) {
  fetch(url)
    .then(res => res.text())
    .then(text => callback(text));
}

// 指定した完全なリクエストパス (URL) から GET メソッドで JSON を得る。
function getJSON(url, callback) {
  fetch(url)
    .then(res => res.json())
    .then(data => callback(data));
}

// 指定した URL から GET/POST メソッドでテキストを得る。
function fetchText(url, data, method, callback) {
  let param = "";
  Object.keys(data).forEach((key) => {
    if (param != "") {
      param += "&";
    }
    param += `${key}=${data[key]}`;
  });
  if (method == "GET") {

    fetch(url + "?" + param)
    .then(res => res.text())
    .then(text => callback(text));
  }
  else if (method == "POST") {
    fetch(url, {method:"POST", body:param})
    .then(res => res.text())
    .then(text => callback(text));
  }
  else {
    // 他のメソッドはサポートしない
  }
}

// 指定した URL から GET/POST メソッドで JSON を得る。
function fetchJSON(url, data, method, callback) {
  let param = "";
  if (method == "GET") {
    Object.keys(data).forEach((key) => {
      if (param != "") {
        param += "&";
      }
      param += `${key}=${data[key]}`;
    });
    fetch(url + "?" + param)
    .then(res => res.json())
    .then(data => callback(data));
  }
  else if (method == "POST") {
    Object.keys(data).forEach((key) => {
      if (param != "") {
        param += "&";
      }
      param += `${key}=${data[key]}`;
    });
    const request = new Request(url, {
       method:"POST",
       body:param
    });
    fetch(request)
    .then(res => res.json())
    .then(data => callback(data));
  }
  else {
    // 他のメソッドはサポートしない
  }
}

// 指定した URL から GET/POST メソッドで BLOB (画像など) を得る。
function fetchBLOB(url, data, method, as, callback) {
  let param = "";
  if (method == "GET") {
    Object.keys(data).forEach((key) => {
      if (param != "") {
        param += "&";
      }
      param += `${key}=${data[key]}`;
    });
    switch (as) {
      case "text":
        fetch(url + "?" + param)
          .then(res => res.blob())
          .then(blob => blob.text())
          .then(text => callback(text));
        break;
      case "arrayBuffer":
        fetch(url + "?" + param)
          .then(res => res.blob())
          .then(blob => blob.arrayBuffer())
          .then(buffer => callback(buffer));
        break;
      case "slice":
        fetch(url + "?" + param)
          .then(res => res.blob())
          .then(blob => blob.slice())
          .then(slice => callback(slice));
        break;
      case "stream":
        fetch(url + "?" + param)
          .then(res => res.blob())
          .then(blob => blob.stream())
          .then(stream => callback(stream));
        break;
      default:
        fetch(url + "?" + param)
          .then(res => res.blob())
          .then(blob => callback(blob));
        break;
    }
  }
  else if (method == "POST") {
    Object.keys(data).forEach((key) => {
      if (param != "") {
        param += "&";
      }
      param += `${key}=${data[key]}`;
    });
    const request = new Request(url, {
       method:"POST",
       body:param
    });
    switch (as) {
      case "text":
        fetch(request)
          .then(res => res.blob())
          .then(blob => blob.text())
          .then(text => callback(text));
        break;
      case "arrayBuffer":
        fetch(request)
          .then(res => res.blob())
          .then(blob => blob.arrayBuffer())
          .then(buffer => callback(buffer));
        break;
      case "slice":
        fetch(request)
          .then(res => res.blob())
          .then(blob => blob.slice())
          .then(slice => callback(slice));
        break;
      case "stream":
        fetch(request)
          .then(res => res.blob())
          .then(blob => blob.stream())
          .then(stream => callback(stream));
        break;
      default:
        fetch(request)
          .then(res => res.blob())
          .then(blob => callback(blob));
        break;
    }
  }
  else {
    // 他のメソッドはサポートしない
  }
}

// 指定した URL から GET/POST メソッドで ArrayBuffer (純粋なバイナリー配列) を得る。
function fetchArrayBuffer(url, data, method, dataView, callback) {
  let param = "";
  if (method == "GET") {
    Object.keys(data).forEach((key) => {
      if (param != "") {
        param += "&";
      }
      param += `${key}=${data[key]}`;
    });
    if (dataView) {
      fetch(url + "?" + param)
       .then(res => res.arrayBuffer())
       .then(buffer => {
          const dview = new DataView(buffer);
          callback(dview);
        });
     }
     else {
        fetch(url + "?" + param)
        .then(res => res.arrayBuffer())
        .then(buffer => callback(buffer));
     }
  }
  else if (method == "POST") {
    Object.keys(data).forEach((key) => {
      if (param != "") {
        param += "&";
      }
      param += `${key}=${data[key]}`;
    });
    const request = new Request(url, {
       method:"POST",
       body:param
    });
    if (dataView) {
      fetch(request)
       .then(res => res.arrayBuffer())
       .then(buffer => {
          const dview = new DataView(buffer);
          callback(dview);
        });
    }
    else {
      fetch(request)
      .then(res => res.arrayBuffer())
      .then(data => callback(data));
    }
  }
  else {
    // 他のメソッドはサポートしない
  }
}

// フォームをポストする。
//  (input[type="file"] を含む enctype="multipart/form-data" 指定のフォームも可能)
function postForm(url, form, callback) {
  event.preventDefault();
  const formType = typeof form;
  if (formType == "string") {
    const form1 = document.getElementById(form);
    const formData1 = new FormData(form1);
    fetch(url, {method:"POST", body:formData1})
    .then(res => res.json())
    .then(data => callback(data));
  }
  else {
    const formData = new FormData(form);
    fetch(url, {method:"POST", body:formData})
    .then(res => res.json())
    .then(data => callback(data));
  }
}

// FormData をポストする。
function postFormData(url, formData, callback) {
  fetch(url, {method:"POST", body:formData})
  .then(res => res.json())
  .then(data => callback(data));
}

// JSONデータをポストする。
function postJSON(url, data, callback) {
  event.preventDefault();
  fetch(url, {"method":"POST", "headers":{"Content-Type":"application/json"}, "body":JSON.stringify(data)})
  .then(res => res.json())
  .then(data => callback(data));
}

// テキストファイルをアップロードする。
function uploadTextFile(url, id, callback) {
  event.preventDefault();
  const afile = document.getElementById(id).files[0];
  if (afile) {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const request = new Request(url, {
        method: "POST",
        body: reader.result
      });
      fetch(request)
       .then(response => response.text())
       .then(text => {
          callback(text);
        });
    });
    reader.readAsText(afile);
  }
}

// バイナリーファイルをアップロードする。
function uploadBinaryFile(url, id, callback) {
  event.preventDefault();
  const afile = document.getElementById(id).files[0];
  if (afile) {
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const request = new Request(url, {
        method: "POST",
        body: reader.result
      });
      fetch(request)
       .then(response => response.text())
       .then(text => {
          callback(text);
        });
    });
    reader.readAsArrayBuffer(afile);
  }
}

// テキストファイルを読む。id は input[type="file"] の ID。
function readTextFile(id, callback) {
  event.preventDefault();
  const efile = document.getElementById(id).files[0];
  if (efile) {
     const reader = new FileReader();
     reader.addEventListener("load", event => {
        callback(reader.result);
     });
     reader.readAsText(efile);
  }
}

// バイナリーファイルを読む。id は input[type="file"] の ID。
function readBinaryFile(id, callback) {
  event.preventDefault();
  const efile = document.getElementById(id).files[0];
  if (efile) {
     const reader = new FileReader();
     reader.addEventListener("load", event => {
        callback(reader.result);
     });
     reader.readAsArrayBuffer(efile);
  }
}

// click イベントハンドラを追加する。
function clickEvent(id, callback) {
  let el = id;
  if (typeof id == "string") {
    el = document.getElementById(id);
  }
  el.addEventListener("click", callback);
}

// change イベントハンドラを追加する。
function changeEvent(id, callback) {
  let el = id;
  if (typeof id == "string") {
    el = document.getElementById(id);
  }
  el.addEventListener("change", callback);
}
