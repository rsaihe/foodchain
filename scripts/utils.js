function getByType(entities, types) {
    var results = [];
    for (var i = 0; i < entities.length; ++i) {
        var e = entities[i];
        for (var j = 0; j < types.length; ++j) {
            if (e.name === types[j]) {
                results.push(e);
            }
        }
    }
    return results;
}

function insideCircle(x, y, cx, cy, r) {
    return sq(x - cx) + sq(y - cy) < sq(r);
}

function insideRect(x, y, cx, cy, w, h) {
    return x > cx && y > cy && x < cx + w && y < cy + h;
}

function outsideRect(x, y, cx, cy, w, h) {
    return x < cx || y < cy || x > cx + w || y > cy + h;
}
