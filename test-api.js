// Simple API testing script
// Run with: node test-api.js

const BASE_URL = 'http://localhost:5000/api';

let employeeId = '';
let taskId = '';

async function testAPI() {
  console.log('🚀 Starting API Tests...\n');

  try {
    // Test 1: Create Employee
    console.log('1️⃣  Creating Employee...');
    const employeeData = {
      name: 'Test User',
      email: `test${Date.now()}@example.com`,
      position: 'Developer',
      department: 'IT',
      salary: 60000
    };

    const createEmployeeRes = await fetch(`${BASE_URL}/employees`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employeeData)
    });
    const employee = await createEmployeeRes.json();
    employeeId = employee.data._id;
    console.log('✅ Employee created:', employee.data.name);
    console.log('   ID:', employeeId, '\n');

    // Test 2: Get All Employees
    console.log('2️⃣  Getting All Employees...');
    const getAllEmployeesRes = await fetch(`${BASE_URL}/employees`);
    const allEmployees = await getAllEmployeesRes.json();
    console.log(`✅ Found ${allEmployees.count} employees\n`);

    // Test 3: Get Employee by ID
    console.log('3️⃣  Getting Employee by ID...');
    const getEmployeeRes = await fetch(`${BASE_URL}/employees/${employeeId}`);
    const singleEmployee = await getEmployeeRes.json();
    console.log('✅ Employee retrieved:', singleEmployee.data.name, '\n');

    // Test 4: Update Employee
    console.log('4️⃣  Updating Employee...');
    const updateData = {
      position: 'Senior Developer',
      salary: 75000
    };
    const updateEmployeeRes = await fetch(`${BASE_URL}/employees/${employeeId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData)
    });
    const updatedEmployee = await updateEmployeeRes.json();
    console.log('✅ Employee updated:', updatedEmployee.data.position, '\n');

    // Test 5: Create Task
    console.log('5️⃣  Creating Task...');
    const taskData = {
      title: 'Test Task',
      description: 'This is a test task',
      assignedTo: employeeId,
      priority: 'high',
      status: 'pending',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };
    const createTaskRes = await fetch(`${BASE_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData)
    });
    const task = await createTaskRes.json();
    taskId = task.data._id;
    console.log('✅ Task created:', task.data.title);
    console.log('   ID:', taskId, '\n');

    // Test 6: Get All Tasks
    console.log('6️⃣  Getting All Tasks...');
    const getAllTasksRes = await fetch(`${BASE_URL}/tasks`);
    const allTasks = await getAllTasksRes.json();
    console.log(`✅ Found ${allTasks.count} tasks\n`);

    // Test 7: Get Task by ID
    console.log('7️⃣  Getting Task by ID...');
    const getTaskRes = await fetch(`${BASE_URL}/tasks/${taskId}`);
    const singleTask = await getTaskRes.json();
    console.log('✅ Task retrieved:', singleTask.data.title, '\n');

    // Test 8: Get Tasks by Employee
    console.log('8️⃣  Getting Tasks by Employee...');
    const tasksByEmployeeRes = await fetch(`${BASE_URL}/tasks/employee/${employeeId}`);
    const tasksByEmployee = await tasksByEmployeeRes.json();
    console.log(`✅ Found ${tasksByEmployee.count} tasks for employee\n`);

    // Test 9: Update Task
    console.log('9️⃣  Updating Task...');
    const updateTaskData = {
      status: 'in-progress',
      priority: 'medium'
    };
    const updateTaskRes = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateTaskData)
    });
    const updatedTask = await updateTaskRes.json();
    console.log('✅ Task updated:', updatedTask.data.status, '\n');

    // Test 10: Update Task to Completed
    console.log('🔟 Updating Task to Completed...');
    const completeTaskRes = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'completed' })
    });
    const completedTask = await completeTaskRes.json();
    console.log('✅ Task completed:', completedTask.data.completedAt ? 'Yes' : 'No', '\n');

    // Test 11: Delete Task
    console.log('1️⃣1️⃣  Deleting Task...');
    const deleteTaskRes = await fetch(`${BASE_URL}/tasks/${taskId}`, {
      method: 'DELETE'
    });
    const deleteTaskResult = await deleteTaskRes.json();
    console.log('✅ Task deleted:', deleteTaskResult.message, '\n');

    // Test 12: Delete Employee
    console.log('1️⃣2️⃣  Deleting Employee...');
    const deleteEmployeeRes = await fetch(`${BASE_URL}/employees/${employeeId}`, {
      method: 'DELETE'
    });
    const deleteEmployeeResult = await deleteEmployeeRes.json();
    console.log('✅ Employee deleted:', deleteEmployeeResult.message, '\n');

    console.log('🎉 All tests completed successfully!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Make sure the server is running on http://localhost:5000');
  }
}

// Check if fetch is available (Node.js 18+)
if (typeof fetch === 'undefined') {
  console.error('❌ This script requires Node.js 18+ or install node-fetch');
  console.log('Alternatively, use the Postman collection or cURL commands in API_TESTING_GUIDE.md');
} else {
  testAPI();
}

