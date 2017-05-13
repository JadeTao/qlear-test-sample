var direction = function() {
    if (position.x === 19 && position.y === 19) {
        return 'success';
    }
    var direc = [];
    if (!/top/.test(container[position.x][position.y].ref.className) && !container[position.x - 1][position.y].isVisited) {
        direc.push("top");
    }
    if (!/right/.test(container[position.x][position.y].ref.className) && !container[position.x][position.y + 1].isVisited) {
        direc.push("right");
    }
    if (!/bottom/.test(container[position.x][position.y].ref.className) && !container[position.x + 1][position.y].isVisited) {
        direc.push("bottom");
    }
    if (position.y !== 0 && !/left/.test(container[position.x][position.y].ref.className) && !container[position.x][position.y - 1].isVisited) {
        direc.push("left");
    }
    container[position.x][position.y].isVisited = true;
    return direc;
}
var move = function(direc) {
    if (direc === "success") {
        return "success";
    }
    if (direc.length === 0) {
        route.pop();
        position.x = route[route.length - 1].x;
        position.y = route[route.length - 1].y;
        move(direction());
    } else {
        var _direc = direc.join('');

        if (/top/.test(_direc)) {
            current = {};
            current.x = --position.x;
            current.y = position.y;
            route.push(current);
            move(direction());
        } else if (/right/.test(_direc)) {
            current = {};
            current.x = position.x;
            current.y = ++position.y;
            route.push(current);
            move(direction());
        } else if (/bottom/.test(_direc)) {
            current = {};
            current.x = ++position.x;
            current.y = position.y;
            route.push(current);
            move(direction());
        } else if (/left/.test(_direc)) {
            current = {};
            current.x = position.x;
            current.y = --position.y;
            route.push(current);
            move(direction());
        }
    }
}
window.onload = function() {
    (function(global) {
        var
            rows = document.querySelectorAll(".row"),
            alen = rows.length,
            blen,
            i, j, row, item;

        global.position = { x: 0, y: 0 };
        global.container = [];
        global.route = [{ x: 0, y: 0 }];
        global.current = {};

        for (i = 0; i < alen; i++) {
            row = [];
            for (j = 0, blen = rows[i].childElementCount; j < blen; j++) {
                item = {};
                item.class = [];
                item.isVisited = false;
                item.ref = rows[i].children[j];
                if (/top/.test(rows[i].children[j].className)) {
                    item.class.push("top");
                }
                if (/right/.test(rows[i].children[j].className)) {
                    item.class.push("right");
                }
                if (/bottom/.test(rows[i].children[j].className)) {
                    item.class.push("bottom");
                }
                if (/left/.test(rows[i].children[j].className)) {
                    item.class.push("left");
                }
                row.push(item);
            }
            container.push(row);
        }
    })(window)
    move(direction())
    for (let i = 0; i < route.length; i++) {
        setTimeout(function() {
            container[route[i].x][route[i].y].ref.className = container[route[i].x][route[i].y].ref.className + ' rat';
        }, (i + 1) * 500)
    }
}