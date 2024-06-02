function SubmitData() {
   const inputName = document.getElementById("inputName").value;
   const iputEmail = document.getElementById("inputEmail").value;
   const inputPhone = document.getElementById("inputPhone").value;
   const inputSubject = document.getElementById("inputSubject").value;
   const inputMessage = document.getElementById("inputMessage").value;
   if (inputName == "") {
      alert("Nama harus di isi");
   } else if (iputEmail == "") {
      alert("Email harus di isi");
   } else if (inputPhone == "") {
      alert("Phone number tidak boleh kosong");
   } else if (inputSubject == "") {
      alert("subject harus di isi");
   } else if (inputMessage == "") {
      alert("message harus di isi");}
   // } else {
   //    alert("terimakasih");
   // }
   console.log(
      `Name : ${inputName}\nEmail : 
      ${inputEmail}\nPhone : ${inputPhone}\nSubject : ${inputSubject}\nMessage : ${inputMessage}`
   );
   let a = document.createElement('a')
   a.href =`mailto:${iputEmail}'?subject=${inputSubject}&body=${inputMessage}`;
a.click();
}
