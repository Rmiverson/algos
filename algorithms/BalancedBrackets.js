function isBalanced(s) {
    if ((s.length % 2) !== 0 || s.length === 0) {
        console.log('NO')
        return 'NO'
    }    
    console.log(s)
    let stringArray = s.split('')
    let stack = []

    for (let i = 0; i < s.length; i++) {
        // console.log(stack)
        // console.log(stringArray[i])
        // console.log(stack[stack.length - 1])
        if (stringArray[i] === '(' || stringArray[i] === '{' || stringArray[i] === '[') {
            stack.push(stringArray[i])
        } else if (stack[stack.length - 1] === '(' && stringArray[i] === ')' || stack[stack.length - 1] === '[' && stringArray[i] === ']' || stack[stack.length - 1] === '{' && stringArray[i] === '}'){
            stack.pop()
        } else {
            console.log('NO')
            return 'NO'
        }
    }
    if (stack.length > 0) {
        console.log('NO')
        return 'NO'
    }

    console.log('YES')
    return 'YES'
}

let abbynormal = '[{'

let testCase = [
'()[{}()]([[][]()[[]]]{()})([]()){[]{}}{{}}{}(){([[{}([]{})]])}',
'{][({(}]][[[{}]][[[())}[)(]([[[)][[))[}[]][()}))](]){}}})}[{]{}{((}]}{{)[{[){{)[]]}))]()]})))[',
'[)](][[([]))[)',
']}]){[{{){',
'{[(}{)]]){(}}(][{{)]{[(((}{}{)}[({[}[}((}{()}[]})]}]]))((]][[{{}[(}})[){()}}{(}{{({{}[[]})]{((]{[){[',
'()}}[(}])][{]{()([}[}{}[{[]{]](]][[))(()[}(}{[{}[[]([{](]{}{[){()[{[{}}{[{()(()({}([[}[}[{(]})',
'){[])[](){[)}[)]}]]){](]()]({{)(]])(]{(}(}{)}])){[{}((){[({(()[[}](]})]}({)}{)]{{{',
'[(})])}{}}]{({[]]]))]})]',
'[{',
'{}([{()[]{{}}}])({})',
'{({}{[({({})([[]])}({}))({})]})}',
'()[]',
'{)[])}]){){]}[(({[)[{{[((]{()[]}][([(]}{](])()(}{(]}{})[)))[](){({)][}()((',
'[][(([{}])){}]{}[()]{([[{[()]({}[])()()}[{}][]]])}',
'(}]}',
'(([{()}]))[({[{}{}[]]{}})]{((){}{()}){{}}}{}{{[{[][]([])}[()({}())()({[]}{{[[]]([])}})()]]}}',
'[(([){[](}){){]]}{}([](([[)}[)})[(()[]){})}}]][({[}])}{(({}}{{{{])({]]}[[{{(}}][{)([)]}}',
'()()[()([{[()][]{}(){()({[]}[(((){(())}))]()){}}}])]',
'({)}]}[}]{({))}{)]()(](])})][(]{}{({{}[]{][)){}{}))]()}((][{]{]{][{}[)}}{)()][{[{{[[',
')}(()[])(}]{{{}[)([})]()}()]}(][}{){}}})}({](){([()({{(){{',
'}([]]][[){}}[[)}[(}(}]{(}[{}][{}](}]}))]{][[}(({(]}[]{[{){{(}}[){[][{[]{[}}[)]}}]{}}(}',
]

for (let i = 0; i < testCase.length; i++) {
    isBalanced(testCase[i])
}

// isBalanced(abbynormal)