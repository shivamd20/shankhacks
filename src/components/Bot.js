import ChatBot from 'react-simple-chatbot';
import React, { Component } from 'react';

class Bot extends React.Component {

    state = {

        userInfo : {
            email : "example",
            password:"",
            confpassword:"",
            name:"ram",
            gender:"",

        },

        opened: false,
        steps: [

            {
                id: 'start',
                message: 'What do you want to do?',
                trigger: '2',
                // user: true
            },
            {
                id: '2',
                options: [
                    { value: 1, label: 'Registration', trigger: 'askForEmail' },
                    // { value: 2, label: 'Chat', trigger: '3' },
                    // { value: 3, label: 'end', trigger: '3' },
                ],
            },

            {
                id : 'askForEmail',
                message : 'Please enter your email address',
                end : true
            },

          
            


        ],
    }

    render() {

        return (
            <div>
               

                <ChatBot


                    opened={ this.state.opened}
                    recognitionEnable={true}

                    // cache={true}

                    floating={true}

                    headerTitle="ShanksHacks"

                    // opened={this.state.opened}

                    toggleFloating={() => {
                        this.setState({
                            opened: !this.state.opened
                        });
                    }}

                    steps={
                        this.state.steps
                    }
                />

            </div>
        );
    }

}

export default Bot;