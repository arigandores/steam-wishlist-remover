let appids = []; // add your appids here
let index = 0;

function removeAppFromWishlist() {
  const appid = appids[index];
  fetch("https://store.steampowered.com/api/removefromwishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `appid=${appid}&sessionid=${g_sessionID}`
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    if (data.success === true) {
      console.log("Wishlist count: " + data.wishlistCount);
    } else {
      console.log("Failed to remove app with ID " + appid);
    }
    index++;
    if (index < appids.length) {
      removeAppFromWishlist();
    }
  });
}

removeAppFromWishlist();
