def guess_number guess
    number = 25
    # your code here
    if guess == number 
        "You got it!"
    elsif guess < number
        "Guess was too low."
    elsif guess > number
        "Guess was too high."
    end
end 

puts guess_number 25
