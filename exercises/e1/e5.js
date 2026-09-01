// Exercise 5 — Parallel vs sequential

// a.	Create three functions ⁠fetchA(), ⁠fetchB(), ⁠fetchC() that each return a Promise resolving to ⁠'A', ⁠'B', ⁠'C' after random delays (use ⁠delay() from Exercise 1 with random ms).

// b.	Implement ⁠runSequential() that awaits each fetch one after another and returns the combined string (e.g., ⁠'ABC').

// c.	Implement ⁠runParallel() that runs the three fetches in parallel with ⁠Promise.all and returns combined result.

// d.	Log and compare total elapsed times for both functions.

