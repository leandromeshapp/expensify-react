const add = (a, b) => a + b

const generateGreeting = (name = "Anonymous") => `Hello ${name}!`


test("Should add A + B", () => {
    const result = add(4, 3)

    expect(result).toBe(7)
})

test("Should show Hello Leandro", () => {
    const result = generateGreeting("Leandro")
    expect(result).toBe("Hello Leandro!")
})

test("Should generate default name", () => {
    const result = generateGreeting()
    expect(result).toBe("Hello Anonymous!")
})
// if(result !== 7) {
//     throw new Error(`You added 4 and 3. The result was ${result}. Expected 7`)
// }
