
// UC-5
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [{
            _name: 'Aanchal Thakur',
            _gender: 'Female',
            _department: [
                'Engineering', 'Hr'
            ],
            _salary: '800000',
            _startDate: '12 Dec 2019',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../Assets/homepage2.png'
        },
        {
            _profilePic: '../Assets/homepage4.png',
            _name: 'Payal Thakur',
            _gender: 'Female',
            _department: [
                'Engineering', 'Hr', 'Others'
            ],
            _salary: '500000',
            _startDate: '14 Oct 2019',
            _note: '',
            _id: new Date().getTime(),

        },
        {
            _profilePic: '../Assets/homepage3.png',
            _name: 'Rajendra Singh',
            _gender: 'Male',
            _department: [
                'Engineering', 'Hr', 'Teaching'
            ],
            _salary: '600000',
            _startDate: '29 July 2019',
            _note: '',
            _id: new Date().getTime(),

        },
        {
            _profilePic: '../Assets/Ellipse -5.png',
            _name: 'Yah Raj Singh',
            _gender: 'Male',
            _department: [
                'Engineering', 'Sales',
            ],
            _salary: '450000',
            _startDate: '09 Jan 2019',
            _note: '',
            _id: new Date().getTime(),

        }
    ]
    return empPayrollListLocal;
}

 //UC-4
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
})

function createInnerHtml() {
    const headerHtml = `<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>
        <th>Salary</th><th>start Date</th><th>Actions</th></tr>`
    let innerHtml = `${headerHtml}
    let empPayrollList = createEmployeePayrollJSON()
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
            <tr>
           <td><img src="../Assets/homepage2.png" class="profile" width="30px" alt=""></td>
           <td>Aanchal Thakur</td>
           <td>Female</td>
           <td>
             <div class="dept-label">Engineer</div>
             <div class="dept-label">HR</div>
             <div class="dept-label">Others</div>
           </td>
           <td>500000</td>
           <td>12 Dec 2019</td>
           <td>
              <img id="1" onclick="remove(this)" alt="delete" width="30px"
              src="../Assets/icons/delete.jgp">
              <img id="1" onclick="update(this)" alt="edit" width="30px"
              src="../Assets/edit.jpg">
          </td>
        </tr>
        <tr>
            <td><img src="../Assets/homepage4.png" class="profile" width="30px" alt=""></td>
            <td>Payal Thakur</td>
            <td>Female</td>
            <td>
               <div class="dept-label">Engineer</div>
               <div class="dept-label">HR</div>
             </td>
            <td>800000</td>
            <td>14 Oct 2019</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete" width="30px"
                src="../Assets/icons/delete.jpg">
                <img id="1" onclick="update(this)" alt="edit" width="30px"
                src="../Assets/icons/edit.jpg">
            </td>
        </tr>
        }
    document.querySelector('#display').innerHTML = innerHtml
}
function getDeptHtml(deptList) {
    let deptHtml = ''
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml
}