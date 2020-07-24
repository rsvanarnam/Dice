""" 
To do:
Quantity of dice? Sides of dice? Number of rolls?
Add dice together and output the number
Gui buttons / output
Make better looking dice
"""
import random

dice1 = random.randint(1,6)
dice2 = random.randint(1,6)

if dice1 == 1:
    print("1")
elif dice1 == 2:
    print("2")
elif dice1 == 3:
    print("3")
elif dice1 == 4:
    print("4")
elif dice1 == 5:
    print("5")    
elif dice1 == 6:
    print("6")
else:
    print("Hm. Something isn't working.")

if dice2 == 1:
    print("1")
elif dice2 == 2:
    print("2")
elif dice2 == 3:
    print("3")
elif dice2 == 4:
    print("4")
elif dice2 == 5:
    print("5")    
elif dice2 == 6:
    print("6")
else:
    print("Hm. Something isn't working.")

 _________
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
