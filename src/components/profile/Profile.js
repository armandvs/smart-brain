import React from 'react';
import './Profile.css';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.user.name,
            age: this.props.user.age,
            pet: this.props.user.pet
        }
    }

    onFormChange = (event) => {
        switch(event.target.name) {
            case 'name':
                this.setState({name: event.target.value})
                break;
            case 'age':
                this.setState({age: event.target.value})
                break;
            case 'pet':
                this.setState({pet: event.target.value})
            default:
                return;
        }
    }

    onProfileUpdate = (data) => {
        fetch(`http://localhost:3000/profile/${this.props.user.id}`,{
            method: 'post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({formInput: data})
        }).then(resp => {
            this.props.toggleModal();
            this.props.loadUser({...this.props.user, ...data})
        }).catch(console.log)
    }

    render(){
        const {user, toggleModal} = this.props;
        const {name, pet, age} = this.state;

        return (
                <div className='profile-modal'>
                    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
                        <main className="pa4 black-80 w-80">
                            <img src="http://tachyons.io/img/logo.jpg" className="h3 w3 dib" alt="avatar" />
                            <h1>{this.state.name}</h1>
                            <h4>Images submitted: {user.entries}</h4>
                            <p>Member since: {new Date(user.joined).toLocaleDateString()}</p>
                            <hr/>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder={user.name}
                                        onChange={this.onFormChange}
                                        />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="age">Age</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                                        type="text"
                                        name="age"
                                        id="age"
                                        placeholder={user.age}
                                        onChange={this.onFormChange}
                                        />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="pet">Pet</label>
                                    <input
                                        className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                                        type="text"
                                        name="pet"
                                        id="pet"
                                        placeholder={user.pet}
                                        onChange={this.onFormChange}
                                        />
                                </div>
                                <div className='mt4' style={{display:'flex', justifyContent: 'space-evenly'}}>
                                    <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'
                                            onClick={() => this.onProfileUpdate({name, age, pet})}
                                    >Save
                                    </button>
                                    <button 
                                        className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'
                                        onClick={toggleModal}
                                    >Cancel</button>
                                </div>
                        </main>
                        <div className='modal-close' onClick={toggleModal}>&times;</div>
                    </article>
                </div>
            )
    }
}

export default Profile;

// ({isProfileOPen, toggleModal, user})