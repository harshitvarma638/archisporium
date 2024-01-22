import React from "react";

function Newsletter() {
    return(
        <>
            <div>
                <h1>DON'T FORGET TO SIGN UP</h1>
                <p>Find out early about all upcoming projects and new designs with
our newsletter.</p>
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
        </>
    );
}

export default Newsletter;