const rollNoField = document.getElementById('rollNo');
const studentForm = document.getElementById('studentForm');
const saveBtn = document.getElementById('saveBtn');
const updateBtn = document.getElementById('updateBtn');
const resetBtn = document.getElementById('resetBtn');

const formFields = ['fullName', 'class', 'birthDate', 'address', 'enrollmentDate'].map(id => document.getElementById(id));

function resetForm() {
  studentForm.reset();
  formFields.forEach(field => field.disabled = true);
  rollNoField.disabled = false;
  saveBtn.disabled = true;
  updateBtn.disabled = true;
  resetBtn.disabled = true;
  rollNoField.focus();
}

function enableForm() {
  formFields.forEach(field => field.disabled = false);
  rollNoField.disabled = true;
}

function validateForm() {
  return formFields.every(field => field.value.trim() !== '');
}

function handleRollNoInput() {
  const rollNo = rollNoField.value.trim();
  if (rollNo) {
    const jsonStr = { rollNo: rollNo };
    const getReqStr = createGET_BY_KEYRequest("90932147|-31949221004657587|90963810", "SCHOOL-DB", "STUDENT-TABLE", JSON.stringify(jsonStr));
    jQuery.ajaxSetup({ async: false });
    const resultObj = executeCommandAtGivenBaseUrl(getReqStr, "http://api.login2explore.com:5577", "/api/irl");
    jQuery.ajaxSetup({ async: true });

    if (resultObj.status === 200) {
      const student = JSON.parse(resultObj.data).record;
      formFields.forEach(field => field.value = student[field.id] || '');
      updateBtn.disabled = false;
      resetBtn.disabled = false;
      saveBtn.disabled = true;
      enableForm();
      document.getElementById('fullName').focus();
    } else {
      enableForm();
      saveBtn.disabled = false;
      resetBtn.disabled = false;
      updateBtn.disabled = true;
      document.getElementById('fullName').focus();
    }
  }
}

function saveStudent() {
  if (validateForm()) {
    const rollNo = rollNoField.value.trim();
    const student = formFields.reduce((obj, field) => {
      obj[field.id] = field.value.trim();
      return obj;
    }, { rollNo: rollNo });
    const putReqStr = createPUTRequest("90932147|-31949221004657587|90963810", JSON.stringify(student), "SCHOOL-DB", "STUDENT-TABLE");
    jQuery.ajaxSetup({ async: false });
    const resultObj = executeCommandAtGivenBaseUrl(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
    jQuery.ajaxSetup({ async: true });
    alert("Student data saved successfully.");
    resetForm();
  } else {
    alert('Please fill out all fields.');
  }
}

function updateStudent() {
  if (validateForm()) {
    const rollNo = rollNoField.value.trim();
    const student = formFields.reduce((obj, field) => {
      obj[field.id] = field.value.trim();
      return obj;
    }, { rollNo: rollNo });
    const updateReqStr = createUPDATERecordRequest("90932147|-31949221004657587|90963810", JSON.stringify(student), "SCHOOL-DB", "STUDENT-TABLE", rollNo);
    jQuery.ajaxSetup({ async: false });
    const resultObj = executeCommandAtGivenBaseUrl(updateReqStr, "http://api.login2explore.com:5577", "/api/iml");
    jQuery.ajaxSetup({ async: true });
    if (resultObj.status === 200) {
      alert("Student data updated successfully.");
    } else {
      alert("Failed to update student data.");
    }
    resetForm();
  } else {
    alert('Please fill out all fields.');
  }
}

rollNoField.addEventListener('input', handleRollNoInput);
saveBtn.addEventListener('click', saveStudent);
updateBtn.addEventListener('click', updateStudent);
resetBtn.addEventListener('click', resetForm);

window.onload = resetForm;
