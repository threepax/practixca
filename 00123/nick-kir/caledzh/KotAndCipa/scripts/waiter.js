document.addEventListener('DOMContentLoaded', function() {
    // Привязываем функции к кнопкам по их id
    document.getElementById('add-order-btn').addEventListener('click', addOrder);
    document.getElementById('delete-order-btn').addEventListener('click', deleteOrder);
    document.getElementById('delete-item-btn').addEventListener('click', deleteItem);
    document.getElementById('new-order-btn').addEventListener('click', newOrder);
    document.getElementById('order-history-btn').addEventListener('click', orderHistory);
    document.getElementById('change-status-btn').addEventListener('click', changeStatus);
    
    // Инициализируем элемент для отображения информации о заказах
    let ordersInfoElement = document.createElement('div');
    ordersInfoElement.id = 'orders-info';
    document.querySelector('main').appendChild(ordersInfoElement);
});

// Объект, представляющий текущие заказы
let orders = []; 

// Функция для обновления информации о заказах на странице
function updateOrdersInfo() {
    let ordersInfoElement = document.getElementById('orders-info');
    ordersInfoElement.innerHTML = ''; // Очищаем содержимое элемента
    orders.forEach(function(order) {
        let orderElement = document.createElement('div');
        orderElement.textContent = 'Заказ ' + order.id + ': ' + order.status;
        
        // Добавление списка позиций заказа
        if (order.items.length > 0) {
            let itemsList = document.createElement('ul');
            order.items.forEach(function(item) {
                let itemElement = document.createElement('li');
                itemElement.textContent = item;
                itemsList.appendChild(itemElement);
            });
            orderElement.appendChild(itemsList);
        }

        ordersInfoElement.appendChild(orderElement);
    });
}

// Функция для добавления заказа
function addOrder() {
    let newOrder = {
        id: generateId(),
        items: [],
        status: 'новый'
    };
    orders.push(newOrder);
    console.log('Добавлен новый заказ:', newOrder);
    updateOrdersInfo();
}

// Функция для удаления заказа
function deleteOrder() {
    if (orders.length === 0) {
        console.log('Нет заказов для удаления.');
        return;
    }
    let deletedOrder = orders.pop();
    console.log('Удален заказ:', deletedOrder);
    updateOrdersInfo();
}

// Функция для удаления позиции из заказа
function deleteItem() {
    if (orders.length === 0) {
        console.log('Нет заказов для удаления позиций.');
        return;
    }
    let lastOrder = orders[orders.length - 1];
    if (lastOrder.items.length === 0) {
        console.log('В последнем заказе нет позиций для удаления.');
        return;
    }
    let deletedItem = lastOrder.items.pop();
    console.log('Удалена позиция из заказа:', deletedItem);
    updateOrdersInfo();
}

// Функция для создания нового заказа
function newOrder() {
    let newOrder = {
        id: generateId(),
        items: [],
        status: 'новый'
    };
    orders.push(newOrder);
    console.log('Создан новый заказ:', newOrder);
    updateOrdersInfo();
}

// Функция для отображения истории заказов
function orderHistory() {
    console.log('История заказов:', orders);
    alert('История заказов: ' + JSON.stringify(orders, null, 2));
}

// Функция для изменения статуса заказа
function changeStatus() {
    if (orders.length === 0) {
        console.log('Нет заказов для изменения статуса.');
        return;
    }
    let lastOrder = orders[orders.length - 1];
    lastOrder.status = 'оплачен'; // Предположим, что статус изменяется на "оплачен"
    console.log('Статус последнего заказа изменен на "оплачен".');
    updateOrdersInfo();
}

// Функция для генерации уникального идентификатора заказа
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
