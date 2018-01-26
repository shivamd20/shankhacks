import ChatBot from 'react-simple-chatbot';
import React, { Component } from 'react';

class Bot extends React.Component {

    state={
        opened:false
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

                    steps={[
                        {
                            id: 'hello-world',
                            message: 'Hello World!',
                            end: true,
                        },
                    ]}
                />

            </div>
        );
    }

}

export default Bot;