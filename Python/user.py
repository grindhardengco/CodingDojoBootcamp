class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount

    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):
        print(f"User {self.name}'s, balance is ${self.account_balance}.")

    # def transfer_money(self, amount, recipient):
    #     self.account_balance -= amount
    #     ???.account_balance += amount

chris = User("Chris Arnold", "chris@burrito.com")
brandon = User("Brandon Hudson", "brandon@burrito.com")=
brodie = User("Brodie Savage", "brodie@burrito.com")

chris.make_deposit(100)
brandon.make_deposit(200)
brodie.make_deposit(300).make_withdrawal(50)

chris.display_user_balance()
brandon.display_user_balance()
brodie.display_user_balance()

# brandon.transfer_money(75, "Chris Arnold")
# chris.display_user_balance()
# brandon.display_user_balance()