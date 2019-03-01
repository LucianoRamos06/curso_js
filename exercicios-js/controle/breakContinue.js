const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const i in nums) {
    if(i === 5){
        break
    }

    console.log(`i = ${i}, ${nums[i]}`)
}


for (const i in nums) {
    if(i === 5){
        continue
    }

    console.log(`i = ${i}, ${nums[i]}`)
}

externo: for (const i in nums) {
   for (const j in nums) {
       if (i === 2 && j === 3) {
           break externo
       }

       console.log(`par ${i}, ${j}`)
   }
}

console.log('Fim!!')