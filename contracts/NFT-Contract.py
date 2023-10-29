import smartpy as sp


class NFTContract(sp.Contract):
    def __init__(self, admin, price):
        self.init(
            admin = admin,
            price = price,
        )
            
    @sp.entry_point
    def buy(self):
        sp.verify(sp.amount >= self.data.price, message="Insufficient funds")
        self.data.admin.transfer(self.data.price)

@sp.add_test(name="NFT Purchase")
def test():
    admin = sp.test_account("Admin")
    user = sp.test_account("User")
    
    c1 = NFTContract(admin.address, sp.mutez(1))
    scenario = sp.test_scenario()
    scenario += c1
        scenario += c1.buy().run(sender=user, amount=sp.mutez(1))