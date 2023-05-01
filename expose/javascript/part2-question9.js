function discountPrices(prices, discount) {
    const discounted = [];
    const finalPrice = 0;

    for (let i = 0; i < prices.length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    //  console.log(i);
    //  console.log(discountedPrice);
    //  console.log(finalPrice);
    //  console.log(discounted);
    //  console.log(length);
    return discounted;
}
discountPrices([100, 200, 300], 0.5);