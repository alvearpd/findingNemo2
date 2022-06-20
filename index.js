const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'dquirt'];
const large = new Array(100000).fill('nemo');
function findNemo(array) {
  let start_time = process.uptime();
  //let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
  let end_time = process.uptime();
  //let t1 = performance.now();
  //console.log('Call to find Nemo took' + (t1 - t0) + ' milliseconds');
console.log("For loop took rgrgrgr ", end_time - start_time);

}

findNemo(large);
