class Dialog {
    constructor(title = "标题", content = "内容", btn1 = "确定", btn2 = "取消") {
        this.init();
        this.show();
        this.title(title);
        this.content(content);
        this.btn(btn1, btn2);
        this.hide();
    }
    show() {
        const button = document.createElement('button');
        button.innerHTML = "点击"
        document.body.append(button);
        const zheZhao = document.querySelector('.zheZhao');
        button.addEventListener('click', () => {
            zheZhao.style.display = "block"
        })
    }
    init() {
        const zheZhao = document.createElement('div');
        zheZhao.className = "zheZhao";
        document.body.append(zheZhao);
        const box = document.createElement('div');
        box.className = "box";
        zheZhao.append(box)
    }
    title(tit) {
        const head = document.createElement('div');
        head.className = "head";
        const h2 = document.createElement("h2");
        h2.innerHTML = tit;
        const span = document.createElement('span');
        span.className = "icon iconfont icon-cuo";
        head.append(h2)
        head.append(span)
        const box = document.querySelector('.box');
        box.append(head)
    }
    content(cont) {
        const content = document.createElement('div');
        content.innerHTML = cont;
        content.className = "content";
        const box = document.querySelector('.box');
        box.append(content)
    }
    btn(btn1, btn2) {
        const ok = document.createElement('button');
        ok.innerHTML = btn1;
        ok.className = "ok";
        const clost = document.createElement('button');
        clost.innerHTML = btn2;
        clost.className = "clost";
        const box = document.querySelector('.box');
        box.append(ok);
        box.append(clost);
    }
    hide() {
        const icon = document.querySelector('.icon');
        const ok = document.querySelector('.ok');
        const clost = document.querySelector('.clost');
        const zheZhao = document.querySelector('.zheZhao');
        icon.addEventListener('click', () => {
            zheZhao.style.display = 'none';
        })
        ok.addEventListener('click', () => {
            zheZhao.style.display = 'none';
        })
        clost.addEventListener('click', () => {
            zheZhao.style.display = 'none';
        })
    }
}
const dialog = new Dialog();