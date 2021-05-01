let canvas, ctx;
let vertexes = [];
let diffPt = [];
let autoDiff = 1000;
let verNum = 250;
let canvasW = window.innerWidth + 40;

addEventListener("load", init, false);

function resize() {
    canvasW = document.getElementById('container').offsetWidth + 40;
    initCanvas(canvasW, window.innerHeight);
    let cW = canvas.width;
    let cH = canvas.height;
    for (let i = 0; i < verNum; i++)
        vertexes[i] = new Vertex(cW / (verNum - 1) * i, cH / 2, cH / 2);
    initDiffPt();
    // let win_3 = window.innerWidth / 3;
}

function init() {
    resize();
    let FPS = 30;
    let interval = 1000 / FPS >> 0;
    setInterval(update, interval);
    addEventListener("DOMMouseScroll", wheelHandler, false);
    addEventListener("mousewheel", wheelHandler);
    addEventListener("resize", resize, false);

    canvas.addEventListener("mousedown",
        (e) => {
            let mouseX, mouseY;
            if (e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            } else {
                mouseX = event.x + document.body.scrollLeft;
                mouseY = event.y + document.body.scrollTop;
            }

            if (window.innerHeight / 2 - mouseY < 50 && window.innerHeight / 2 - mouseY > -50) {
                //diffPt[150] = autoDiff;
                autoDiff = 1000;
                if (mouseX < canvas.width - 2) {
                    xx = 1 + Math.floor((verNum - 2) * mouseX / canvas.width);
                    diffPt[xx] = autoDiff;
                }

            }
        }, false);
}

let wheelHandler = function (e) {
    let s = (e.detail) ? -e.detail : e.wheelDelta;
    s > 0 ? (dd > 15 ? dd-- : {}) : (dd < 50 ? dd++ : {});
};

function initDiffPt() {
    for (let i = 0; i < verNum; i++)
        diffPt[i] = 0;
}

let xx = 150;
let dd = 15;

function update() {
    //ctx.rect(50,20,280,620);
    //ctx.stroke();
    //ctx.clip();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    autoDiff -= autoDiff * 0.9;
    diffPt[xx] = autoDiff;
    //左侧
    //差分，使得每个点都是上一个点的下一次的解，由于差分函数出来的解是一个曲线，且每次迭代后，曲线相加的结果形成了不断地波浪
    for (let i = xx - 1; i > 0; i--) {
        let d = xx - i;
        if (d > dd) d = dd;
        diffPt[i] -= (diffPt[i] - diffPt[i + 1]) * (1 - 0.01 * d);
    }
    //右侧
    for (let i = xx + 1; i < verNum; i++) {
        let d = i - xx;
        if (d > dd) d = dd;
        diffPt[i] -= (diffPt[i] - diffPt[i - 1]) * (1 - 0.01 * d);
    }

    //更新点Y坐标
    for (let i = 0; i < vertexes.length; i++)
        vertexes[i].updateY(diffPt[i]);

    draw();
}

let color1 = "";
let color2 = "";

function draw() {
    ctx.beginPath();
    ctx.moveTo(0, window.innerHeight);
    ctx.fillStyle = color1;
    ctx.lineTo(vertexes[0].x, vertexes[0].y);
    for (let i = 1; i < vertexes.length; i++) {
        ctx.lineTo(vertexes[i].x, vertexes[i].y);
    }
    ctx.lineTo(canvas.width, window.innerHeight);
    ctx.lineTo(0, window.innerHeight);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, window.innerHeight);
    ctx.fillStyle = color2;
    ctx.lineTo(vertexes[0].x + 15, vertexes[0].y + 5);
    for (let i = 1; i < vertexes.length; i++) {
        ctx.lineTo(vertexes[i].x + 15, vertexes[i].y + 5);
    }
    ctx.lineTo(canvas.width, window.innerHeight);
    ctx.lineTo(0, window.innerHeight);
    ctx.fill();

    ctx.fillStyle = "#777";
    ctx.font = "12px sans-serif";
    ctx.textBaseline = "top";
    ctx.fillText("点击水面产生波动", 70, canvas.height / 2 - 20);
    ctx.fillStyle = "#fff";
    ctx.fillText(`滚轮调整粘度 / Viscosity: ${((dd - 15) * 20 / 7).toFixed(1)}%`, 70, canvas.height / 2 + 15);
}

function initCanvas(width, height) {
    canvas = document.getElementById("canvas");
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");
}

function Vertex(x, y, baseY) {
    this.baseY = baseY;
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.targetY = 0;
    this.friction = .15;
    this.deceleration = .95;
}

Vertex.prototype.updateY = function (diffVal) {
    this.targetY = diffVal + this.baseY;
    this.vy += this.targetY - this.y;
    this.y += this.vy * this.friction;
    this.vy *= this.deceleration;
};

let changeColor = function (value) {
    color1 = value + "77";
    color2 = value;
};

color.value = "#0000ff";
changeColor("#0000ff");