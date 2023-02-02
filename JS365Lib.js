/* My JS Library .. JS365Lib.js */

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
  if (typeof id == 'string') {
    if (E(id).value == undefined) {
      return E(id).innerText;
    }
    else {
      return E(id).value;
    }
  }
  else if (typeof id == 'object') {
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

// 要素の値を設定する。。
function setValue(id, value, escape=true) {
  if (typeof id == 'string') {
    if (E(id).value == undefined) {
      if (escape) {
        if (value == null) {
          E(id).innerText = "null";
        }
        else {
          E(id).innerText = value.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
      }
      else {
        E(id).innerHTML = value;
      }
    }
    else {
      E(id).value = value;
    }
  }
  else if (typeof id == 'object') {
    if (id.value == undefined) {
      if (escape) {
        id.innerText = value.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
  if (typeof id == 'string') {
    el = E(id);
  }
  switch (position) {
    case 0:
      el.insertAdjacentHTML('beforebegin', html);  // 開始タグの直前
      break;
    case 1:
      el.insertAdjacentHTML('afterbegin', html);  // 開始タグの直後
      break;
    case 2:
      el.insertAdjacentHTML('beforeend', html);   // 終了タグの直前
      break;
    case 3:
      el.insertAdjacentHTML('afterend', html);   // 終了タグの直後
      break;
    default:
      break;
  }
}

// 要素を作成する。
function create(tag) {
  return document.createElement(tag);
}

// 子要素を作成する。
function addChild(parent, child) {
  return parent.appendChild(child);
}


// 要素の属性を得る。
function getAttr(id, attr) {
  let el = id;
  if (typeof el == 'string') {
    el = E(id);
  }
  return el.getAttribute(attr);
}

// 要素の属性を設定する。
function setAttr(id, attr, value) {
  let el = id;
  if (typeof el == 'string') {
    el = E(id);
  }
  el.setAttribute(attr, value);
}

// 要素の属性を削除する。
function dropAttr(id, attr) {
  let el = id;
  if (typeof el == 'string') {
    el = E(id);
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
    .then(json => callback(json));
}


// 指定した URL から GET/POST メソッドでテキストを得る。
function fetchText(url, data, method, callback) {
  if (method == 'GET') {
    let param = "?";
    Object.keys(data).forEach((key) => {
      if (param != '?') {
        param += '&';
      }
      param += `${key}=${data[key]}`;
    });
    fetch(url + param)
    .then(res => res.text())
    .then(text => callback(text))
    .catch(err => callback(err));
  }
  else if (method == 'POST') {
    fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)})
    .then(res => res.text())
    .then(text => callback(text))
    .catch(err => callback(err));
  }
  else {
    // 他のメソッドはサポートしない
  }
}


// 指定した URL から GET/POST メソッドで JSON を得る。
function fetchJSON(url, data, method, callback) {
  if (method == 'GET') {
    let param = "?";
    Object.keys(data).forEach((key) => {
      if (param != '?') {
        param += '&';
      }
      param += `${key}=${data[key]}`;
    });
    fetch(url + param)
    .then(res => res.json())
    .then(data => callback(data))
    .catch(err => callback(err));
  }
  else if (method == 'POST') {
    fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)})
    .then(res => res.json())
    .then(data => callback(data))
    .catch(err => callback(err));
  }
  else {
    // 他のメソッドはサポートしない
  }
}


// 指定した URL から GET/POST メソッドで BLOB (画像など) を得る。
function fetchBLOB(url, data, method, callback) {
  if (method == 'GET') {
    let param = "?";
    Object.keys(data).forEach((key) => {
      if (param != '?') {
        param += '&';
      }
      param += `${key}=${data[key]}`;
    });
    fetch(url + param)
    .then(res => res.blob())
    .then(blob => callback(window.URL.createObjectURL(blob)))
    .catch(err => callback(err));
  }
  else if (method == 'POST') {
    fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)})
    .then(res => res.blob())
    .then(blob => callback(window.URL.createObjectURL(blob)))
    .catch(err => callback(err));
  }
  else {
    // 他のメソッドはサポートしない
  }
}

// 指定した URL から GET/POST メソッドで ArrayBuffer (純粋なバイナリー配列) を得る。
function fetchArrayBuffer(url, data, method, callback) {
  if (method == 'GET') {
    let param = "?";
    Object.keys(data).forEach((key) => {
      if (param != '?') {
        param += '&';
      }
      param += `${key}=${data[key]}`;
    });
    fetch(url + param)
    .then(res => res.arrayBuffer())
    .then(buffer => callback(buffer))
    .catch(err => callback(err));
  }
  else if (method == 'POST') {
    fetch(url, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)})
    .then(res => res.arrayBuffer())
    .then(buffer => callback(buffer))
    .catch(err => callback(err));
  }
  else {
    // 他のメソッドはサポートしない
  }
}


// フォームをポストする。
//  (input[type="file"] を含む enctype="multipart/form-data" 指定のフォームも可能)
function postFormData(url, form, callback) {
  const formData = new FormData(form);
  fetch(url, {method:'POST', body:formData})
  .then(res => res.json())
  .then(data => callback(data))
  .catch(err => callback(err));
}

// JSONデータをポストする。
function postJSON(url, data, callback) {
  fetch(url, {"method":"POST", "headers":{"Content-Type":"application/json"}, "body":JSON.stringify(data)})
  .then(res => res.json())
  .then(data => callback(data))
  .catch(err => callback(err));
}


// click イベントハンドラを追加する。
function clickEvent(id, callback) {
  let el = id;
  if (typeof id == 'string') {
    el = E(id);
  }
  el.addEventListener('click', callback);
}

// change イベントハンドラを追加する。
function changeEvent(id, callback) {
  let el = id;
  if (typeof id == 'string') {
    el = E(id);
  }
  el.addEventListener('change', callback);
}
