//SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

contract TodoList {
	uint public taskCount;

	struct Task {
		uint id;
		string content;
		bool completed;
	}

	mapping(uint => Task) public tasks;

	event TaskCreated(uint id, string content, bool completed);

	constructor(string memory _content) {
		createTask(_content);
	}

	function createTask(string memory _content) public {
		tasks[taskCount] = Task(taskCount, _content, false);
		taskCount++;
		emit TaskCreated(taskCount, _content, false);
	}

	function completeTask(uint _taskId) public {
		tasks[_taskId].completed = true;
	}

	function removeTask(uint _taskId) public {
		delete tasks[_taskId];
		taskCount--;
	}
}
