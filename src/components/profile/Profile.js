import React from 'react';
import './Profile.css';

const Profile = ({isProfileOPen, toggleModal}) => {
    return (
        <div className='profile-modal'>
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
                <main className="pa4 black-80 w-80">
                    <img src="http://tachyons.io/img/logo.jpg" className="h3 w3 dib" alt="avatar" />
                    <h1>John Doe</h1>
                    <h4>Images submitted: 5</h4>
                    <p>Member since: January</p>
                    <hr/>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input
                                className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                                type="text"
                                name="name"
                                id="name"
                                // onChange={this.onNameChange}
                                />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="age">Age</label>
                            <input
                                className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                                type="text"
                                name="age"
                                id="age"
                                // onChange={this.onEmailChange}
                                />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="pet">Pet</label>
                            <input
                                className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
                                type="text"
                                name="pet"
                                id="pet"
                                // onChange={this.onPasswordChange}
                                />
                        </div>
                        <div className='mt4' style={{display:'flex', justifyContent: 'space-evenly'}}>
                            <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'>Save</button>
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

export default Profile;