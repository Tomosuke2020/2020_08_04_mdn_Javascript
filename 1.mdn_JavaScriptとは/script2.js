    //JavaScriptをここに書きます。

    //ドキュメントイベントの開始('ドキュメントから読み込まれたコンテンツ'),関数()
    document.addEventListener("DOMContentLoaded", function() {
    
    //関数：段落を作成
    function createParagraph() {

    //letにparaを名付ける。document<文章>.create<作成>Element<要素を>('p')に
    let para = document.createElement('p');
    
    //paraのtext.<テキスト>content<内容> = '表示する内容'
    para.textContent = 'ボタンが押されました!';

    //<文章> 内容 append<追加> Child<子：子要素> (さっきのparaに)
    document.body.appendChild(para);
  }

    //constにボタンの名前をつける = ドキュメントのクエリを全て選択('htmlのボタンの内容')
    const buttons = document.querySelectorAll('button');

    //処理式for文(letにiを名付けこれは0である;)(i以上の長さ<length>にボタン<buttons>が押される; i++<iを一個以上足す>
    for(let i = 0; i < buttons.length ; i++) {
        
        //ボタンが[i]ほど押されると、ドキュメントで読み込まれた('クリック' , パラグラフの作成);
    buttons[i].addEventListener('click', createParagraph);
  }
});

    
    /*buttonという箱にドキュメントを照会し全て選択（ボタン）*/
    var buttons = document.querySelectorAll('button');

    //処理式for(varにiを名付けこれは0である;)(i以上の長さ<length>にボタン<buttons>が押される; i++<iを一個以上足す>
    for (var i = 0; i < buttons.length ; i++) {
        //ボタンが[i]ほど押されると、ドキュメントで読み込まれる（'クリック',パラグラフの作成）;
    buttons[i].addEventListener('click', createParagraph);
    }