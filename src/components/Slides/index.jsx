import React from 'react';
import { withRouter } from 'react-router-dom';

import { Modal } from '../other/Modal';
import { Slider } from '../other/Slider';
import './style.scss'

class Slides extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: localStorage.username || props.location.username,
            slideOptions: ['please select slide count',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            overallSelectedOptions: [],
            isModalVisible: false,
            currentSelectedSlidesCount: 'please select slide count',
            errorMsg: ''
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.logout = this.logout.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.onSelectingSlideCount = this.onSelectingSlideCount.bind(this);
    }

    componentDidMount(){
        !localStorage.getItem('username') && localStorage.setItem('username', this.props.location.username);
    }

    toggleModal(flag) {
        if(!flag) {
            this.setState({
                overallSelectedOptions :[],
                currentSelectedSlidesCount: 'please select slide count'
            })
        }

        if(flag && !this.state.overallSelectedOptions.length) {
            this.setState({
                errorMsg: 'Please select atleast one slider demo.'
            })
            return false;
        }
        this.setState({
            isModalVisible: flag
        })
    }

    logout() {
        localStorage.clear();
        this.props.history.push('/');
    }
    renderOptions(){
        return this.state.slideOptions.map((count)=>{
            return(
                <option key={count} value={count}>{count}</option>
            )
        })
    }

    onSelectingSlideCount(count){

        this.setState({
            errorMsg: '',
            currentSelectedSlidesCount: count,
            overallSelectedOptions: [...this.state.overallSelectedOptions,count]
        })
    }
    render(){
        return(
            <div className="slides wrapper">
                <header className="clearfix">
                    <span className="username">Hi {this.state.username}, welcome to our site.</span> <span className="logout" onClick={this.logout}> Logout</span>
                </header>
                <main>
                <select 
                value={this.state.currentSelectedSlidesCount}
                onChange={e=> this.onSelectingSlideCount(e.target.value)}
                className="select-slide-count"
                >
                {this.renderOptions()}
                </select>
                <span onClick={e=> this.toggleModal(true)} className="confirm-btn">finish</span>
                {
                    this.state.errorMsg &&  <span className="error">{this.state.errorMsg}</span> 
                }
                <Slider count={this.state.currentSelectedSlidesCount}/>
                {
                    this.state.isModalVisible && <Modal selectedList={this.state.overallSelectedOptions} closeModal={this.toggleModal} />
                }
                </main>
            </div>
        )
    }
}

export default withRouter(Slides);