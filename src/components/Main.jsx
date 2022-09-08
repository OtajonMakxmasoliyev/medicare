import React from 'react'

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
        return (
            <div className='Service' >
                <div className="Service_find">
                    <p>Find a doctor</p>
                    <div className="Service_find_inputs">
                        <input type="text" onChange={this.onChangeHandler} name="name" />
                        <input type="text" onChange={this.onChangeHandler} name="speciality" />
                        <div className="Service_find_inputs_check">
                            <button onClick={() => this.setState({ avibility: false })}></button>
                            <div className="aylana" style={this.state.avibility ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" }}></div>
                            <button onClick={() => this.setState({ avibility: true })}></button>
                        </div>
                        <input type="submit" onClick={() => this.submitForm()} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main