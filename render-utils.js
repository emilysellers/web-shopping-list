export function renderItem(item) {
    const li = document.createElement('li');

    if (item.bought) {
        li.classList.add('bought');
    }
    const p = document.createElement('p');
    p.textContent = [item.quantity + ' ' + item.item];
    const button = document.createElement('button');
    button.textContent = 'mark bought';

    li.append(p, button);
    return li;
}
