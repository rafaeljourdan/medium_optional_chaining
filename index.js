import * as students from './db.js'

// #1
let father = 'unknown'
if (students && students[1] && students[1].parents && students[1].parents[1]) {
    father = students[1].parents[1]
}
console.log('father', father)
