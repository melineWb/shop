# Changelog
All notable changes to this project will be documented in this file.

## [Task 1] - 08-02-2020
### Added
- Created Shop Project
- Created Category enum
- Added FirstComponent with properties: name, description, price, category, isAvailabile, tags & bundleItems
- Created IProductModel interface
- Added ProductComponent with properties defined in IProductModel
- Added ProductListComponent which can display all products using ProductComponent
- Created ProductsService which can get products from data.json
- Added Buy btn for ProductComponent. When user click Buy - the product add to cart, cart qty & total price increase & console.log msg "The item was added". Also the stockQty is decrease according added to card quantity. 
- When the stockQty become 0 or item notAvailable by status (from json) - the msg Not Yet Available displayed and Btn Buy disabled. 
- When stockQty of Product <= 5 - on Product Card become displaying line: "Limited stock" with current available qty
- Created component CartListComponent with Btn and Popover with Cart data. When user click on Btn - the popover display / hide. Also near cart icon user can see the quantity of items added to card.
- On popover displayed list of Added Products or msg "Your cart is empty"
- Created CartService with ability to get products added to cart, add products and remove
- When user add the same product to cart - the quantity on the prodct line will increase. 
- Added ability to remove products from cart

## [Task 2] - 08-11-2020
### Added
- Created separate modules: CartModule, ProductsModule, SharedModule
- Ability increase / decrease product qty from Cart Component. If qty = max stockQty & user try to increase Qty - show msg about Max Stock Qty. Message hide after 3 sec.
- Ability to remove products from cart & reset StockQty on Product List Components 
- Added input on product list component to manage how many products will be added in cart. After press button 'Buy' the entered qty of product will be aded to Cart & the msg 'N product(s) added to Cart' fade in on the screen.
- Get total Qty & total sum from CartService
- Added СartItemComponent
- Used OnPush strategy for presentation components
- Added #appTitle for h1
- Created HighlightDirective & used for CartItemComponent
- Used ngClass on AvailabilityFlagComponent & CartListComponent
- Used click & blur DOM events

## [Task 3] - 08-30-2020

### Added
- Added LocalStorageService, ConfigOptionsService, ConstantsService, GeneratorService
- Added ProfileModule and ModalLoginComponent with ability to login and set data into LocalStorageService
- Modified HeaderComponent: Added buttons Login / Logout and show usename if user logged in
- Created AboutComponent
- Created directive appMakeColor, add button 'Like' into ProductComponent. When user click on this button - the appMakeColor works and button color become red.

### Changed
- Changed CartService: Added ability to get totalQuantity, totalSum, updateCartData and removeAllProducts
- Changed tmpl of CartListComponent: added button to removeAllProducts
- Modified header to show AppName from ConstantsService
