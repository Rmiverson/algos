/*
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. 
determine the number of apples and oranges that land on Sam's house.

The red region denotes the house, where  is the start point, and  is the endpoint. 
The apple tree is to the left of the house, and the orange tree is to its right

Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point b.

When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis.
A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right. 

Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s,t] )?

int s
int t
int a
int b
int_arr apples
int_arr oranges
*/



const applesAndOranges = (s, t, a, b, apples, oranges) => {
    let applesOnHouse = 0
    let orangesOnHouse = 0
    let counter = 0

    while (apples.length > counter || oranges.length > counter) {
        if (s <= (apples[counter] + a) && t >= (apples[counter] + a)) {
            applesOnHouse++
        }
        if (s <= (oranges[counter] + b) && t >= (oranges[counter] + b)) {
            orangesOnHouse++
        }
        counter++
    }

    console.log(applesOnHouse)
    console.log(orangesOnHouse)
}

applesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])