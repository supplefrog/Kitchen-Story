import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/shared/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItems: CartItem[] = []; // Define the array to hold cart items

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cartItems = cart.items;
    });
  }

  changeQuantity(foodId: string, newQuantity: number): void {
    this.cartService.changeQuantity(foodId, newQuantity);
  }

  removeFromCart(foodId: string): void {
    this.cartService.removeFromCart(foodId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  get totalCartPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
