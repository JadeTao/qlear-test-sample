var move = function(e) {
    var current = container[position.x][position.y];

    var logic = function() {
        var setClass = function() {
            current.ref.className = current.ref.className.replace(/rat/, '');
            current = container[position.x][position.y];
            current.ref.className += " rat";
        }
        var idDone = function() {
            if (position.x === container[0].length - 1 && position.y === container.length - 1) {
                return true;
            } else {
                return false;
            }
        }
        if (!idDone()) {
            setClass();
        } else {
            setClass();
            setTimeout(function() { alert("Congratulations!") }, 0);
            document.body.removeEventListener("keydown", move);
        }

    }

    if (e.key === "ArrowUp" && current.class.indexOf("top") === -1) {
        position.x--;
        logic();
    }
    if (e.key === "ArrowRight" && current.class.indexOf("right") === -1) {
        position.y++;
        logic();
    }
    if (e.key === "ArrowDown" && current.class.indexOf("bottom") === -1) {
        position.x++;
        logic();
    }
    if (e.key === "ArrowLeft" && current.class.indexOf("left") === -1 && position.y !== 0) {
        position.y--;
        logic();
    }
}
window.onload = function() {
    (function(window) {
        var
            rows = document.querySelectorAll(".row"),
            alen = rows.length,
            blen,
            i, j, row, item;

        window.position = { x: 0, y: 0 };
        window.container = [];

        for (i = 0; i < alen; i++) {
            row = [];
            for (j = 0, blen = rows[i].childElementCount; j < blen; j++) {
                item = {};
                item.class = [];
                item.ref = rows[i].children[j];
                if (/top/.test(rows[i].children[j].className)) {
                    item.class.push("top");
                }
                if (/right/.test(rows[i].children[j].className)) {
                    item.class.push("right")
                }
                if (/bottom/.test(rows[i].children[j].className)) {
                    item.class.push("bottom")
                }
                if (/left/.test(rows[i].children[j].className)) {
                    item.class.push("left")
                }
                row.push(item);
            }
            container.push(row);
        }
    })(window)

    container[0][0].ref.className = container[0][0].ref.className + ' rat'
    document.body.addEventListener("keydown", move, false);
}