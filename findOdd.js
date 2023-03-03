function findOdd(A) {
    return A.sort().reduce((acc, curr) => {
      const latest = acc.at(-1)
      if (A.indexOf(curr) === 0 || curr === latest[0])
      {latest.push(curr)} else {acc.push([curr]);}
      return acc;
    }, [[]]).filter((el) => el.length % 2 !== 0)[0][0];
    }
    