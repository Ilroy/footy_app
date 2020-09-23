import React from "react";

const InfoForm = ({ isRegistering }) => {
  return isRegistering ? (
    <form>
      <label for="signInEmail">Email Address:</label>
      <br />
      <input type="email" id="signInEmail" name="email" />
      <br />

      <label for="signInPassword">Password:</label>
      <br />
      <input type="password" id="signInPassword" name="password" />
      <br />

      <label for="fName">First Name:</label>
      <br />
      <input type="text" id="fName" name="fName" />
      <br />

      <label for="lName">Last Name:</label>
      <br />
      <input type="text" id="lName" name="lName" />
      <br />

      <input type="submit" value="Register" />
      <br />
    </form>
  ) : (
    <form>
      <label for="signInEmail">Email Address:</label>
      <br />
      <input type="email" id="signInEmail" name="email" />
      <br />

      <label for="signInPassword">Password:</label>
      <br />
      <input type="password" id="signInPassword" name="password" />
      <br />

      <input type="submit" value="Sign In" />
      <br />
    </form>
  );
};

export default InfoForm;
