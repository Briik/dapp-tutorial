const _election_migration = require("../migrations/2_election_migration")

//TODO: write Solidity unit tests.
var Election = artifacts.require("./Election.sol")

contract("Election", (accounts) => {
  it("initializes with two candidates",() => Election.deployed()
    .then((instance) => instance.candidatesCount())
    .then((count) => assert.equal(count, 2)));
  
  it("initializes candidates with correct values", () => {
    var electionInstance;
    Election.deployed()
    .then((instance) => {
      electionInstance = instance;
      return electionInstance.candidates(1);
    })
    .then((candidate) => {
      assert.equal(candidate.id.toNumber(), 1);
      assert.equal(candidate.name, "Candidate 1");
      assert.equal(candidate.votes.toNumber(), 0);
      return electionInstance.candidates(2);
    })
    .then((candidate) => {
      assert.equal(candidate.id.toNumber(), 2);
      assert.equal(candidate.name, "Candidate 2");
      assert.equal(candidate.votes.toNumber(), 0);
      return electionInstance;
    })
  });
});