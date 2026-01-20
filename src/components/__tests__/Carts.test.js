/*
1. Load Menu (body) component (Note: this has async operations)
2. user clicks on any of the card, so load the menu details for that restaurant
3. Cart page loads (Note: this is managed by redux, so you wrap component with Provider)
4. FireEvet: Add+ (Note: there will many add buttons, use index for add button selectoe)
5. Screen should show 1 more item in the cart, so read and expect the cart text i.e. Cart (2)
6. fireEvent: click Cart button
7. To read the number of items added, u can use data-testId
8. fireEvent: click clearCart button
9. Read the cart text again and expect it to be Cart (0)

*/