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
            human.health -= 10
            puts "#{human} is attacked by #{self}."
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

class Wizard < Human
    def initialize 
        @health = 50
        @intelligence = 25
        puts "I am a new Wizard"
    end
    
    def heal
        self.health += 10
        puts "Wizard healed himself."
    end

    def fireball(obj)
        obj.health -= 20
    end
end

wizard1 = Wizard.new
wizard1.report
wizard1.fireball(human2)
human2.report
human2.attack(wizard1)
wizard1.report
wizard1.heal
wizard1.report

class Ninja < Human
    def initialize
        @health = 100
        @stealth = 175
        puts "I am a new Ninja"
    end

    def steal(obj)
        obj.health -= 10
        self.health += 10
    end

    def get_away
        self.health -= 15
    end
end

ninja1 = Ninja.new
ninja1.steal(human1)
human1.report
ninja1.report
ninja1.get_away
ninja1.report

class Samurai < Human
    @@count = 0
    def initialize
        @health = 200
        @@count += 1
        puts "I am a new Samurai!"
    end

    def death_blow(obj)
        obj.health = 0
    end

    def meditate
        self.health = 200
    end

    def self.how_many
        puts "There are #{@@count} samurais in this game."
    end
end

samurai1 = Samurai.new
samurai2 = Samurai.new
Samurai.how_many
