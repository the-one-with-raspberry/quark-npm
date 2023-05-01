function insertAfter(toInsert, insertAfter) {
    document.insertBefore(toInsert, insertAfter.nextSibling)
}
function setAttributes(element, attributes) {
    const keys = Object.keys(attributes);
    for (var i = 0; i < attributes.length; i++) {
        element.setAttribute(keys[i], attributes[i]);
    }
}
function quickCreateElement(className, insertAfterNode = null, attributes = null) {
    let r = document.createElement(className);
    if (attributes) {
        setAttributes(r, attributes)
    }
    if (insertAfterNode) {
        insertAfter(r, insertAfterNode)
    } else {
        return r;
    }
}
function deleteFromArray(array, index) {
    array.splice(index, 1)
}
function bomb(element, radius) {
    radius = radius + 1
    const prev = ".previousSibling";
    const next = ".nextSibling";
    for (let i = 0; i < radius; i++) {
        eval(`element${prev}.remove();`);
        eval(`element${next}.remove();`);
    }
    element.remove();
}
module.exports = [insertAfter, setAttributes, quickCreateElement, deleteFromArray, bomb]