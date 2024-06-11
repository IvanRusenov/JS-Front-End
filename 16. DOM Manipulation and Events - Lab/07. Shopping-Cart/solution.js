function solve() {

   let addButtons = Array.from(document.querySelectorAll(".add-product"));
   let textArea = document.querySelector("textarea");
   let checkout = document.querySelector("textarea + button");
   checkout.addEventListener("click", totalPrice);

   addButtons.forEach(b => {
      b.addEventListener("click", onClick);
   })

   let boughtProducts = {}

   function onClick(e) {

      let title = e.target.parentElement.parentElement.querySelector(".product-title").textContent;
      let price = Number(e.target.parentElement.parentElement.querySelector(".product-line-price").textContent);

      if (boughtProducts.hasOwnProperty(`${title}`)) {
         boughtProducts[`${title}`] += Number(price);
      } else {
         boughtProducts[`${title}`] = Number(price);
      }

      textArea.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
   }

   function totalPrice() {
      let allProducts = Object.keys(boughtProducts).join(", ");
      let totalPrice = 0;

      Object.values(boughtProducts).forEach(price => {
         totalPrice += price;
      })

      textArea.textContent += `You bought ${allProducts} for ${totalPrice.toFixed(2)}.`
      Array.from(document.querySelectorAll("button")).forEach(b => b.disabled = true);

   }

}