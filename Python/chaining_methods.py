class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self

    def display_user_balance(self):
        print(f"User {self.name}'s, balance is ${self.account_balance}.")
        return self

    def transfer_money(self, amount, recipient):
        self.account_balance -= amount
        recipient.account_balance += amount

chris = User("Chris Arnold", "chris@burrito.com")
brandon = User("Brandon Hudson", "brandon@burrito.com")
brodie = User("Brodie Savage", "brodie@burrito.com")

chris.make_deposit(100)
brandon.make_deposit(200)
brodie.make_deposit(300).make_withdrawal(50).display_user_balance()

chris.display_user_balance()
brandon.display_user_balance()

brandon.transfer_money(75, chris)
chris.display_user_balance()
brandon.display_user_balance()