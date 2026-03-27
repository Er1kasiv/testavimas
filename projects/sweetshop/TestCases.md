# Simple Test Cases for Sweet Shop

## About Page

- TC_1.1: Check page title - Title is "Sweet Shop"
- TC_1.2: Check for description - Description exists
- TC_1.3: Check for banner - Banner exists

## Login Page

### Page Load

- TC_2.1.1: Check page title - Title is "Sweet Shop"
- TC_2.1.2: Check for description - Description exists
- TC_2.1.3: Check for email and password - Fields exist
- TC_2.1.4: Check for Login button - Button exists

### Login Tests

- TC_2.2.1: Test good login - redirect - Goes to account page
- TC_2.2.2: Test good login - show info - User info shows
- TC_2.2.4: Test login with no password - Stays on login page

## Sweets Page

- TC_3.1: Check page title - Title is "Sweet Shop"
- TC_3.2: Check product list - Products show up
- TC_3.3: Check product details - Name, price, image exist
- TC_3.4: Check Add to Basket button - Button exists
- TC_3.5: Test Add to Basket - Basket count changes

## Basket Page

### Adding Items

- TC_4.1.1: Add item to basket - Item added
- TC_4.1.2: Check basket count - Count updates

### Removing Items

- TC_4.2.1: Remove item from basket - Item removed
- TC_4.2.2: Check basket count - Count updates

## Checkout Page

- TC_5.1.1: Check basket page loads - URL has "/basket"
- TC_5.1.2: Check items show - Items appear
