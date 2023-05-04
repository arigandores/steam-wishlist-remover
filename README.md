# Steps to remove all wishlisted games 
1. Log in to your steam account at browser
2. Go here -> https://store.steampowered.com/dynamicstore/userdata/
3. Copy value of rgWishlist key (ex. [900, 901, 902])
4. Paste rgWishlist value to the "appids" variable at "remover.js" (ex. let appids = [900, 901, 902];)
5. Copy the full code
6. Go to -> https://store.steampowered.com
7. Open browser devtools (F12) on the site from step 4
8. Go to "Console" tab
9. Paste your code
