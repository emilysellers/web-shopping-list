export function renderItem() {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = lists.item;
    li.append(p);
    return li;
}
