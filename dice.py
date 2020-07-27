""" 
To do:
Quantity of dice? Sides of dice? Number of rolls?
Add dice together and output the number
Gui buttons / output
Make better looking dice
"""
import random

def rollDice():
    quantityOfRolls = int(input('How many times would you like to roll the dice?'))
    count = quantityOfRolls

    while quantityOfRolls >= count and count > 0:
        print(random.randint(1,6))
        count = count -1

rollDice()

"""

while quantity > 0:
    if random == 1:
        print("1")
        count = quantity -1
    
__________
|         |
|    0    |  
|_________|


 _________
|  0      |
|         |  
|_______0_|

 _________
|  0      |
|    0    |  
|______0__|

 _________
| 0     0 |
|         |  
|_0_____0 |

 _________
| 0     0 |
|    0    |  
|_0_____0 |

 _________
| 0     0|
| 0     0|  
|_0_____0|
"""