// add to cart
let  productCountEl = document.getElementById('product-count');
console.log (productCountEl);

let addToCartButtons = document.querySelectorAll('.add-to-cart');
console.log (addToCartButtons);

for(let i=0; i<addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener('click',function () {
		/*let prevProductCount= +productCountEl.textContent;
		productCountEl.textContent = prevProductCount + 1;*/ // первый способ
		productCountEl.textContent = +productCountEl.textContent + 1; // второй способ
	})
}

$('.slick').slick({
	dots:true,
})