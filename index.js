let userArr = [];
      globalIndex = 1;
      function updt() {
        let userobj = {};
        userobj.name = document.getElementById("name").value;
        userobj.state = document.getElementById("state").value;
        userobj.mob = document.getElementById("mob").value;
        userobj.city = document.getElementById("city").value;
        userobj.mail = document.getElementById("mail").value;
        userobj.zipcode = document.getElementById("zipcode").value;
        userobj.Password = document.getElementById("Password").value;
        userobj.cpassword = document.getElementById("cpassword").value;

        userArr.splice(globalIndex, 1, userobj);
        loaddt();
        // start();
        // ClearBtn();

        document.getElementById("reg").style.display = "block";
        document.getElementById("up").style.display = "none";

        document.getElementById("name").value = "";
        document.getElementById("state").value = "";
        document.getElementById("mob").value = "";
        document.getElementById("city").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("zipcode").value = "";
        document.getElementById("Password").value = "";
        document.getElementById("cpassword").value = "";
      }

      function regdt() {
        let x = {};

        x.name = document.getElementById("name").value;
        x.state = document.getElementById("state").value;
        x.mob = document.getElementById("mob").value;
        x.city = document.getElementById("city").value;
        x.mail = document.getElementById("mail").value;
        x.zipcode = document.getElementById("zipcode").value;
        x.Password = document.getElementById("Password").value;
        x.cpassword = document.getElementById("cpassword").value;
        console.log(x);
        userArr.push(x);
        loaddt();

        document.getElementById("name").value = "";
        document.getElementById("state").value = "";
        document.getElementById("mob").value = "";
        document.getElementById("city").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("zipcode").value = "";
        document.getElementById("Password").value = "";
        document.getElementById("cpassword").value = "";
      }

      function loaddt() {
        let str = "",
          i = 0;
        for (const dt of userArr) {
          // console.log(dt);
          str += `<tr><td>${dt.name}</td><td>${dt.mob}</td><td>${dt.mail}</td><td>${dt.Password}</td><td>${dt.state}</td><td>${dt.city}</td><td>${dt.zipcode}</td><td>${dt.cpassword}</td>
                    <td>  <button id="edit" onclick="editdt(${i})" class='btn btn-success'>Edit</button></td><td> <button id="delete" onclick ="deltdt(${i})" class='btn btn-danger'>Delete</button></td><tr>`;
          i++;
        }
        document.getElementById("result").innerHTML = str;
      }
      function deltdt(i) {
        console.log(i);
        userArr.splice(i, 1);
        loaddt();
      }

      function editdt(i) {
        globalIndex = i;
        // console.log(userArr[i].name);  
        document.getElementById("name").value = userArr[i].name;
        document.getElementById("state").value = userArr[i].state;
        document.getElementById("mob").value = userArr[i].mob;
        document.getElementById("city").value = userArr[i].city;
        document.getElementById("mail").value = userArr[i].mail;
        document.getElementById("zipcode").value = userArr[i].zipcode;
        document.getElementById("Password").value = userArr[i].Password;
        document.getElementById("cpassword").value = userArr[i].cpassword;

        document.getElementById("reg").style.display = "none";
        document.getElementById("up").style.display = "block";
      }
    //   function Add() {
    //     let x = new Date(document.getElementById("txtDOB").value);
    //     let y = new Date();
    //     y = y.getFullYear();
    //     x = x.getFullYear();
    //     z = y - x;
    //     if (z >= 18) {
    //       document.getElementById("formBody").style.display = "block";
    //       document.getElementById("table").style.display = "block";
    //       document.getElementById("Eligible").style.display = "block";

    //       setTimeout(function () {
    //         document.getElementById("Eligible").style.display = "none";
    //       }, 3000);
    //     } else {
    //       document.getElementById("notEligible").style.display = "none";
    //       setTimeout(function () {
    //         document.getElementById("notEligible").style.display = "none";
    //       }, 3000);
    //     }
    //   }

    function Add() {
        let x = new Date(document.getElementById("txtDOB").value);
        let y = new Date();
        y = y.getFullYear();
        x = x.getFullYear();
        z = y - x;
    
        if (z >= 18) {
            document.getElementById("formBody").style.display = "block";
            document.getElementById("table").style.display = "block";
            document.getElementById("Eligible").style.display = "block";
            document.getElementById("notEligible").style.display = "none"; // Hide the "not eligible" message
    
            setTimeout(function () {
                document.getElementById("Eligible").style.display = "none";
            }, 3000);
        } else {
            document.getElementById("formBody").style.display = "none"; // Hide the form if not eligible
            document.getElementById("table").style.display = "none";
            document.getElementById("notEligible").style.display = "block"; // Show the "not eligible" message
            document.getElementById("Eligible").style.display = "none"; // Hide the "eligible" message
    
            setTimeout(function () {
                document.getElementById("notEligible").style.display = "none";
            }, 3000);
        }
    }
    

      function fname() {
        let x = document.getElementById("demo");
        x.innerHTML = "";
        let name = document.getElementById("name").value;
        let regName = /^[A-Za-z. ]{3,30}$/;
        if (regName.test(name)) {
          x.innerHTML = "Correct Name";
          x.style.color = "white";
        } else {
          x.innerHTML = "Please Enter Correct Name";
          x.style.color = "white";
        }
      }

      function mnum() {
        let x = document.getElementById("demo2");
        x.innerHTML = "";
        let mobile = document.getElementById("mob").value;
        let regMobile = /^[789][0-9]{9}$/;
        if (regMobile.test(mobile)) {
          x.innerHTML = "Valid Number";
          x.style.color = "white";
        } else {
          x.innerHTML = " Enter valid mobile number";
          x.style.color = "white";
        }
      }

      function email() {
        let x = document.getElementById("demo4");
        x.innerHTML = "";
        let mail = document.getElementById("mail").value;
        let regMail = /"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"/;
        if (regMail.test(mail)) {
          x.innerHTML = "Valid Email";
          x.style.color = "white";
        } else {
          x.innerHTML = "Enter a valid Email";
          x.style.color = "white";
        }
      }

      function zip() {
        let x = document.getElementById("demo5");
        x.innerHTML = "";
        let zipcode = document.getElementById("zipcode").value;
        let regZipcode = /^[0-9]{6}(?:-[0-9]{4})?$/;
        if (regZipcode.test(zipcode)) {
          x.innerHTML = "Valid Zipcode";
          x.style.color = "white";
        } else {
          x.innerHTML = "Invalid Zipcode";
          x.style.color = "white";
        }
      }

      function pass() {
        let x = document.getElementById("demo6");
        x.innerHTML = "";
        let password = document.getElementById("Password").value;
        let regPassword =
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        if (regPassword.test(password)) {
          x.innerHTML = "Strong password";
          x.style.color = "white";
        } else {
          x.innerHTML = "Password is week";
          x.style.color = "white";
        }
      }

      function cpass() {
        let x = document.getElementById("demo7");
        x.innerHTML = "";
        let password = document.getElementById("Password").value;
        let cpassword = document.getElementById("cpassword").value;
        if (cpassword != password) {
          x.innerHTML = "**Password not match";
          x.style.color = "white";
        } else {
          x.innerHTML = "Password matched";
          x.style.color = "white";
        }
      }