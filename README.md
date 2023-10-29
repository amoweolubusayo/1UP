# 1UP

# Flock.io implementation

For our app, we thought of how to make it more interactive for people to be interested in purchasing assets they weren’t familiar with. For example, If you do not know who Jamie Oliver is as a personal nutritionist you could head over to our AI section to get some ideas and have a chat with him.

Jamie Oliver could ask you 

Hey there, what's the best way to make a classic Italian pasta dish, and do you have any tips for keeping it healthy?

Flock helped us as we used Flock for the DAO tooling category. We created a main script and used this as our api. We sent over the selection from our dropdown as a prompt and we tweak it so that Flock gives us possible question an asset can ask


**What we could have done if we had more time for Flock**
The plan was to be able to do a two-way chat in real time I.e. as the asset asks us questions, we answer and send our responses over and it’s more interactive

# Tezos implementation

We built on Tezos, all our assets are to be sold and bought on Tezos. We integrated using taquito beacon-wallet and airgap beacon sdk on the ghostnet network. You need to be connected on Tezos to use our dApp.
Once connected, you get to see your wallet balance and you are notified that you are connected, you can also disconnect.
 
For the buy function, we wrote and deployed a smart contract that initializes with an admin address and a price. The buy entry point allows a user to purchase the asset by transferring the specified amount to the admin and storing the asset in the user's item collection.

Our smart contract was written with SmartPy. 

Contract can be found here https://better-call.dev/ghostnet/KT19sQSJsMzgsQCp4LCdd9C7T5wXse2A79Rn/operations

![Run contract](https://hackmd.io/_uploads/rk-cE3of6.png)

![Deployed contract](https://hackmd.io/_uploads/SkJANoizp.png)


To integrate our smart contract on the frontend, we also used taquito and beacon sdk. 


**What we could have done if we had more time for Tezos**
Receipt after purchase as NFT assets that could possibly be worth Tezos tokens later in the future. Other ideas for our smart contract 

Other smart contract functions 

createListing - for seller to list an item (item's name, description, price, and available quantity)

**purchaseItem(done)** - enables the transfer of Tezos assets from the buyer's wallet to the seller's wallet, completing the transaction. It deducts the appropriate amount from the buyer's account and updates the quantity of the item in the inventory if necessary.

checkInventory: enables users to check the available quantity of an asset on the store. It provides real-time information on the inventory status, ensuring that buyers and sellers have accurate data before initiating any transactions.

# Improvements for Tezos
We had to use the legacy edition of SmartPy as the latest version was breakiing our smart contract code. Suggesting more documentation to help. It's also a bit hectic finding documentations

# Improvements for Flock
Would suggest perhaps we can get Flock apikeys instead of using openai. Quite hard to tell the difference between Flock and openai and why I would use Flock over openai directly for dApps. 