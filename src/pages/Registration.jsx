import React,{useState} from "react";
import {
    Form,
    FormBody,
    FormButton,
    FormLabel,
    FormInput,
    Footer,
    FormGroup,
    FormTitle,
    Background
} from'../styles/Registration.style.js'

const Register=()=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);
    // const [success, setSuccess] = useState();

    const handleSubmit=(event)=>{
        event.preventDefault()
        setSubmitting(true)
        //Reset the form
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')

    }

    return(
       <Background>
            <Form onSubmit={handleSubmit}>
                <FormTitle>Register</FormTitle>
          <FormBody>
              <FormGroup>
                  <FormLabel contextMenu="" htmlFor="fullName">Full Name*</FormLabel>
                  <FormInput type="text" id="fullName" value={name} required placeholder="Full Name"
                  onChange={(event)=>setName(event.target.value)}/>
              </FormGroup>
              
              <FormGroup >
                  <FormLabel htmlFor="email">Email*</FormLabel>
                  <FormInput type="email" value={email} id="email" required placeholder="Email"
                  onChange={(event)=>setEmail(event.target.value)}/>
              </FormGroup>
              <FormGroup >
                  <FormLabel  htmlFor="password">Password* </FormLabel> 
                  <FormInput  type="password" value={password} id="password" required placeholder="Password"  minlength="7"
                            pattern="^(?=.*?[A-Z])(?=.*?[0-9])(?=.*\W).{7,}$"
                            onChange={(event)=>setPassword(event.target.value)}
                            onInput={(e) => e.target.setCustomValidity("")}
                            onInvalid={(e) => {
                              e.target.setCustomValidity("");
                              if (!e.target.validity.valid) {
                                e.target.setCustomValidity(
                                  "Password should be at least 7 characters with 1 capital letter, one number, and one special character"
                                );
                              }
                            }}/>
              </FormGroup>
              <FormGroup >
                  <FormLabel  htmlFor="confirmPassword">Confirm Password* </FormLabel>
                  <FormInput type="password" value={confirmPassword} id="confirmPassword" required placeholder="Confirm Password"
                  minlength="7"
                  onChange={(event)=>setConfirmPassword(event.target.value)}
                  onInput={(e) => {
                    if (
                      password &&
                      confirmPassword &&
                      password !== confirmPassword
                    ) {
                      e.target.setCustomValidity("Passwords must match");
                    } else {
                      e.target.setCustomValidity("");
                    }
                  }}/>
              </FormGroup>
          </FormBody>
          <Footer>
              <FormButton type="submit" disabled={submitting}>Register</FormButton>
          </Footer>
          
      </Form>
      </Background> 
    )
}


export default Register