/**
 * [문제] 주문 상태(OrderStatus)를 enum으로 정의하고,
 * 주문 목록에서 "배송 중"인 주문만 추출하세요.
 * 1. OrderStatus: "PENDING", "SHIPPED", "DELIVERED", "CANCELLED" 네 가지 값
 * 2. Order 타입은 id, status, item 필수
 * 3. orders 배열에 3개 이상 입력
 * 4. 배송 중(SHIPPED) 주문만 shippedOrders에 저장
 */

// TODO: OrderStatus enum, Order 타입, orders 배열, shippedOrders 추출

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    CANCELLED,
}

type Order = {
    id: number;
    status: OrderStatus;
    item: string;
};

let orders = [
    { id: 1001, status: OrderStatus.PENDING, item: "Ram" },
    { id: 1002, status: OrderStatus.SHIPPED, item: "CPU" },
    { id: 1003, status: OrderStatus.DELIVERED, item: "SSD" },
];

let shippedOrders: Order[] = [];

for (let order of orders) {
    if (order.status === OrderStatus.SHIPPED) shippedOrders.push(order);
}

console.log(shippedOrders);
