class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=.02, balance=0)

    def make_deposit(self, amount):
        self.account.balance += amount

    def make_withdrawal(self, amount):
        self.account.balance -= amount

    def display_user_balance(self):
        print(f"User {self.name}'s, balance is ${self.account.balance}.")

    def transfer_money(self, amount, recipient):
        self.account.balance -= amount
        recipient.account.balance += amount


class BankAccount:
    def __init__(self, int_rate, balance=0):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if(amount > self.balance):
            print("Insufficient funds:  Charging a $5 fee.")
            self.balance -= 5
        else:
            self.balance -= amount
        return self

    def display_account_info(self):
        print(f"Balance: ${self.balance}.")
        return self

    def yield_interest(self):
        self.balance = self.balance + self.balance * self.int_rate
        return self

chris = User("Chris Arnold", "chris@burrito.com")
brandon = User("Brandon Hudson", "brandon@burrito.com")
brodie = User("Brodie Savage", "brodie@burrito.com")

chris.make_deposit(100)
brandon.make_deposit(200)
brodie.make_deposit(300)

brodie.make_withdrawal(50)

chris.display_user_balance()
brandon.display_user_balance()
brodie.display_user_balance()

brandon.transfer_money(75, chris)
chris.display_user_balance()
brandon.display_user_balance()