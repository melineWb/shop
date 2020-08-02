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