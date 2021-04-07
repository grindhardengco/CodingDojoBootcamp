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

chris = BankAccount(.05,100)
brandon = BankAccount(.01,200)

chris.deposit(50).deposit(50).deposit(50).withdraw(50).yield_interest().display_account_info()

brandon.deposit(25).deposit(25).withdraw(100).withdraw(100).withdraw(100).withdraw(25).yield_interest().display_account_info()