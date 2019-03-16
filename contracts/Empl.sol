pragma solidity ^0.5.0;

contract Empl {

   event AddEmployee(uint eId, string name,address Eaddr);

    struct Employee {
        address Eaddr;
        string name;
        bool task;
    }

    Employee[] public Employees;

    function _createEmployee(string memory _name,address eaddress) public {
        require(msg.sender==Employees[0].Eaddr,"Address is not Employees");
        Employees.push(Employee(eaddress,_name,false));
        uint id = Employees.push(Employee(eaddress,_name,true)) - 1; 
        emit AddEmployee(id,_name,eaddress);
    } 
   function checkTaskStat(bool flag) public{
       //for single employee as this is a test case
       Employees[0].task = flag;
   }
    
}

contract Manag is Empl{
    event transfer(address indexed ManagerAddr,address indexed EmployeeAddr);
    struct Manager{
        address maddr;
        uint reward;
    }
    Manager[] public Managers;
    function AddManag(uint _reward,address _maddr) public{
        require(msg.sender==Managers[0].maddr,"Address is not Managers");
        //reward is certain wei send from manager address to employee address
       Managers.push(Manager(_maddr,_reward));     
    }
    function TransferEther(bool tact) public {
        require(tact == true,"Action not completed");
        require(Employees[0].task == true,"task not completed");
        emit transfer(Employees[0].Eaddr,Managers[0].maddr);
    }
}
