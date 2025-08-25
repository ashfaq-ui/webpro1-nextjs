"use client";
import styles from "./user.module.css"
import { useState } from "react";


export default function UserProfile(){
        const [dob, setDob] = useState("2000-01-01");

// reset state to initial value.  leran how to reset the date ???



    return(
            <div className={styles["background-colour"]} >
                <div className={styles["sub-whole-area"]} >
                    <h1>hello world!</h1>
                </div>
{/* 
                action="mailto:yourmail@example.com" method="POST" enctype="text/plain"
                in here leran why we use method and action and enctype?
                */}


                <form >
                    <fieldset>
                        <legend>User Details</legend>
                            <br />
                            <label htmlFor="firstname">First Name :</label>
                            <input 
                                type="text" 
                                id="firstname" 
                                name="name" 
                                size="30" 
                                placeholder="Enter your First name" 
                                required/>

                            <br />
                            <br />
                            <label htmlFor="lastname">Last Name :</label>
                            <input 
                                type="text" 
                                id="lastname" 
                                name="name" 
                                size="30" 
                                placeholder="Enter your Last name" 
                                required/>
                    </fieldset>
                        <br />
                    <fieldset>
                        <legend>Dob</legend>

                            <br />
                            <label htmlFor="dob">Date Of Birth</label>
                            <input 
                                type="date" 
                                id="dob" 
                                name="dob" 
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                required />
                    </fieldset>
                    <br />
                    <fieldset>
                        <br />
                        <input type="reset" name="reset" value="Reset" />
                        <br />
                        <br />
                        <input type="submit" name="submit" value="Sent" />
                    </fieldset>
                </form>
                <div className={styles["whole-area"]} >
                    <h1>hello world!</h1>
                </div>
            
            </div>
    );
}