function mergeAndSumValue(arr)
{
const objA = { a: 10, b: 20, c: 30 },
         objB = { a: 3, c: 6, d: 3 };

const merged = arr.object.entries(objB).reduce((acc, [key, value]) =>         ({...acc, [key]: (acc[key] || 0) + value }), { ...objA })

return console.log(merged);
}
