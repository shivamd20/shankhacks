import ChatBot from 'react-simple-chatbot';
import React, { Component } from 'react';

class Bot extends React.Component {

    state={
        opened:false,
        steps:[
            {
                id: 'hello-world',
                message: 'Hello World!',
                end: true,
            },
        ]
    }

    render() {

        return (
            <div>
                <ChatBot

                    cache={true}

                    floating={true}

                    headerTitle="ShanksHacks"

                    opened={this.state.opened}

                    toggleFloating={()=>{
                        this.setState({
                            opened : ! this.state.opened
                        });
                    }}

                    recognitionEnable={true}

                    steps={this.state.steps}
                />

            </div>
        );
    }

}

export default Bot;