let imp=(i,a)=>(i<=a.length)?a[i-1]:i;
let cat=l=>{let r="",n=l.next;while(n!=l&&r.length<20){r+=n.v;n=n.next;}return r;};

let play = function(name, input, N, M, exp) {
	let obj = {};
	for (let i=1;i<=N;++i) { obj[i] = {v:i}; }
	for (let i=1;i<=N;++i) { obj[imp(i,input)].next = obj[imp(i%N+1,input)]; }

	let cur = obj[imp(1,input)];
	for (let m=1;m<=M;++m) {
		let snip = cur.next;
		let putBackAt, v = cur.v;
		cur = (cur.next = snip.next.next.next);
		do {
			// Adding 'N' because I'm not sure how JavaScript handles (-1 % N). Too lazy to test.
			v = (v + N - 1 - 1) % N + 1; // 1-based: (x-1)%N+1
			putBackAt = obj[v];
		} while (
			putBackAt == snip ||
			putBackAt == snip.next ||
			putBackAt == snip.next.next);
		snip.next.next.next = putBackAt.next;
		putBackAt.next = snip;
	}
	if (N < 100) {
		let r = cat(obj[1]);
		console.log("Part 1", name, r, exp, exp == r);
	} else {
		let nx = obj[1].next;
		console.log("Part 2", name, nx.v, "*", nx.next.v, "=", nx.v*nx.next.v, nx.v*nx.next.v == exp);
	}
}

play("TEST a", "389125467", 9, 10, "92658374");
play("TEST b", "389125467", 9, 100, "67384529");
play("ANSWER", "186524973", 9, 100, "45983627");
play("TEST", [3,8,9,1,2,5,4,6,7], 1000000, 10000000, "149245887792");
play("ANSWER", [3,6,8,1,9,5,7,4,2], 1000000, 10000000, "192515314252");
