import {React,useState} from "react";
import "./NewsTestimonial.css";

function Newsletter() {
    const [email,setEmail] = useState("");

    const handleSubmit = async (e) => {
        console.log("working");
        e.preventDefault();

        const data = {
            members: [
              {
                email_address: email,
                status: 'subscribed',
              },
            ],
        };
        
          try {
            const response = await fetch('http://localhost:3001/subscribe', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
            if(response.ok){
                alert("Thank you for subscribing");
            }
            else{
              const errorData = await response.json(); // Try to parse error response

              if (errorData && errorData.error) {
                console.error(`Server error: ${errorData.error}`);
                alert(`Server error: ${errorData.error}`);
              } else {
                console.error('Unknown server error');
                alert('Unknown server error');
              }
            }
        
            // Handle the response
          } catch (error) {
            console.error('Error occurred:', error);
          }
    };

    return(
        <>
            <div className="news">
                <h1>DON'T FORGET TO SIGN UP</h1>
                <p>Find out early about all upcoming projects and new designs with our newsletter.</p>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={email} placeholder="Enter your email" className="email" onChange={(e) => setEmail(e.target.value)}/>
                    <span><button type="submit" className="submit-btn">Subscribe</button></span>
                </form>
            </div>
        </>
    );
}

export default Newsletter;