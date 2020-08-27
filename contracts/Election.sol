pragma solidity >=0.4.21 <0.7.0;

contract Election {
    struct Candidate {
        uint id;
        string name;
        uint votes;
    }

    // similar to hashmap
    mapping(uint => Candidate) public candidates;
    // required because cannot determine number of candidates based on mapping
    uint public candidatesCount;

    // Constructor
    constructor () public {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate (string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }
}