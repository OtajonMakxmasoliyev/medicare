import Card from './card';
import React from 'react'
import Machine from "../images/icons/machine_blue.svg"
import Microscope from "../images/icons/microscope_blue.svg"
import Call from "../images/icons/call_blue.svg"
import Phone from "../images/icons/phone_blue.svg"

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            speciality: "",
            aviability: false
        }
    }
    onChangeHandler = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
        console.log(this.state.name);
    }

    submitForm = () => {
        const url = `https://url`
        const { name, speciality, aviability } = this.state;
        alert("Jo'natilishga tayyor")
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, speciality, aviability })
        })
            .then(res => console.log(res))
            .then(response => console.log(response))
            .catch(err => console.log(err))
        console.log({ name, speciality, aviability });
    }

    render() {
        console.log(this.state.name);
        console.log(this.state.aviability);
        return (
            <div className='Service' >
                <div className="Service_find">
                    <p>Find a doctor</p>
                    <div className="Service_find_inputs">
                        <input type="text" onChange={this.onChangeHandler} name="name" placeholder='Name of Doctor' />
                        <input type="text" onChange={this.onChangeHandler} name="speciality" placeholder='Speciality' />
                        <p>Aviability</p>
                        <div className="Service_find_inputs_check">
                            <button onClick={() => this.setState({ aviability: false })}></button>
                            <div className="aylana" style={this.state.aviability ? { left: "23px" } : { left: "2px" }}></div>
                            <button onClick={() => this.setState({ aviability: true })}></button>
                        </div>
                        <input type="submit" onClick={() => this.submitForm()} />
                    </div>
                </div>
                <div className="Service_our">
                    <p className='title'>Our Medical Services</p>
                    <p>We are dedicated to serve you
                        best medical services</p>
                    <div className="Service_our_cards" >
                        <Card info="Well equipped lab" image={Microscope} />
                        <Card info="Emergency Ambulance" image={Machine} />
                        <Card info="Online Appointment" image={Call} />
                        <Card info="Call Center" image={Phone} />
                    </div>
                </div>
            </div >
        )
    }
}

export default Main