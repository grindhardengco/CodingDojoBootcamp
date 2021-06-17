class Human
    attr_accessor :strength, :intelligence, :stealth, :health
    
    def initialize
        @strength = 3
        @intelligence = 3
        @stealth = 3
        @health = 100
        puts "I'm a new human."
    end
    
    def attack(human)
        if human.class.ancestors.include?(Human)
            human.health = human.health - 10
        end
    end 

    def report
        puts "My health is #{@health}."
    end 
end

human1 = Human.new
human2 = Human.new
human1.report
human2.attack(human1)
human1.report