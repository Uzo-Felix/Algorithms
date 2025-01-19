// maxProfit.ts  

/**  
 * This function calculates the maximum profit that can be obtained  
 * by buying and selling a stock one time.  
 *  
 * @param prices - An array of stock prices, where prices[i] is the price on day i.  
 * @returns The maximum profit that can be obtained.  
 */  
function maxProfit(prices: number[]): number {  
    let maxProfit = 0;  
    let minPrice = prices[0];  

    for (let i = 1; i < prices.length; i++) {  
        if (prices[i] < minPrice) {  
            minPrice = prices[i];  
        } else {  
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);  
        }  
    }  

    return maxProfit;  
}  

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5  
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0