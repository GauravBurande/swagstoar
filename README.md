This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Here's how I built this webapp using react, mongoDB, nodeJs and express, basically MENN stack. Also, I used tailwindCss for styling.
### You can visit the webapp here: [swagstoar.vercel.app](http://swagstoar.vercel.app/)
This webapp took about a month to build.

One more thing to add here, the webapp will feel slow sometimes whenever there's fetching data from database due to using the free tier of mongodb atlas and long distance database.

After learning ReactJS, I decided to learn #tailwindcss. So, I made a Facebook login clone for some practice while searching through tailwindcss' docs.
I built a webapp to save notes after learning react, you can visit the webapp here: [https://use-noted.netlify.app/login](https://use-noted.netlify.app/login)
Then I started learning NextJs, after getting a clear idea of how nextJs is like a production framework for react. I started building this webapp.

First I started with creating different pages like index.js, hats, hoodies, t-shirts, contact, about, sign in, and sign up.....
I designed the logo of swagstoar using canva. When I started building this webapp, at the beginning I was just doing most of the frontend work, styling and creating landing pages, making the pages responsive. After some time it started getting boring, doing the same work, again and again, I couldn't wait to start building APIs and doing something else and just style pages.

I created express middleware to connect the backend with mongoDB database. Created User, Products and Orders models, and wrote schemas. Then I created the checkout page. I wasn't much sure how to design it. It took a lot of time just to decide what to do. Most of the time I was just staring at the screen and thinking than coding.

Then I created addproducts and getproducts API. I was having some errors connecting the API with the database, the errors were in models, but I fixed that error.
I also had some syntax errors and json parsing and stringify and those data type errors. I used console.log a lot to debug these errors and also got help from StackOverflow. Then I created updateproduct API and used getServerSideProps for pre-rendering the hoodies page. I was just copy-pasting most of my code if I needed to create any new API or page.

I did feel burned out sometimes, feeling lazy. But still, I continued to build pages and create APIs to fetch product details. In the meantime, I was also reading some docs of mongoose, express and nextJs in case I needed any help.

I was thinking should I use redux or context API for state management, but I just used props, because it was easy due to the _app.js page.
I built some functions like addToCart, RemoveFromCart, and clearCart. It made me understand how to use arrays and objects more. After building the cart functionality, I gave these functions to the components as props.

Then I migrated my other webapp noted's backend from Heroku to render because Heroku stopped their free dyno services.

I created products/[slug] page to display the product, its details, price and other stuff.

I had designed my alert to show an alert when needed, but when I came to know about react-toastify, I commented on my code to display a notification and used the package.
I was so impressed by the result. It was so easy.

I built a signup API for creating users in the database.
I prefer using async-await instead of using 'then' and callbacks.
Creating the signup page was so easy, I just copy pasted the code and replaced some code and text. Added some documents of hoodies in the Product model.

Then I installed the CryptoJs package for encrypting the user password. 
Using CryptoJs for encrypting and decrypting the password and jsonwebtoken was so easy. 
Then build sign In, and sign Out functions, and modified some UI elements.

Refactored the code of swagstoar, removed hard quoted text with env variables, created orders page and some more little things.
I was thinking about how to the setup payment gateway, If it's possible for me, but I realised that I don't need a payment gateway if I'm building this webapp for my portfolio, it'll not be necessary, so I replaced the code with just another alert that pops up when you click the pay button.
Also, the code wasn't working because the paytmchecksum package wasn't working. So, I didn't even need a payment system, so I replaced it.

Then Configured the order model for the database to store order details, and connected it with the backend postorder API. I spent 30 min solving an error, where I just had to parse the data. I built a posttransaction API to redirect the checkout page to the order confirmation page and modified the checkout page to create a view order button after payment. Then added the track order button, fixed some bugs, updated UI and built myOrders API to fetch order details.

Added some code to autofill city and state based on Pincode and autofill email on the checkout page and don't show checkout page if the cart is an empty and fixed bug when there's no user found with given email. Then built a page for forgot password and backend API forgotpass to change the user's password. I kept it just simple.

Then updated the footer - added customer service and policy categories. built contact and about us page.
built return policy, privacy policy, and terms of service pages and modified footer, contact and about us page.

I was thinking to use the pure-react-carousel package but instead, I uninstalled the package and created a carousel by using simple logic and JavaScript.

I did not had any idea how to design the home page for swagstoar, I looked at some other sites and designed the home page by looking at other similar sites. I still had some UI issues, I fixed them later when I found them. I also needed to add hats and tshirt products to the mongoDB database.

The app was all ready to be deployed. I created a free cluster on mongoDB Atlas. Then created a vercel account, and linked my GitHub account to vercel. added MongoDB URI string as an env variable and other variables. I did had some errors while deploying. I looked at the build logs, the error was due to an unused API, I deleted that file and redeployed it. After the site was live I created some users, and added products to the database by using the addproducts API.
Then I opened the webapp on the phone, and while surfing on my webapp I realised there are some issues with the UI and some other issues, which I fixed quickly.
Don't forget to leave a feedback.
