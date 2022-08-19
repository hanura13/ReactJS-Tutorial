import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { addDataToAPI, deleteDataToAPI, getDataToAPI, updateDataToAPI } from '../../../config/redux/action';
import './index.scss'

class Dashboard extends Component{

    state = {

        title: '',
        content: '',
        date: '',
        textButton: 'SIMPAN',
        noteId: ''
    }

    componentDidMount(){
        const userData = JSON.parse(localStorage.getItem('userData'))
        this.props.getNotes(userData.uid);
    }

    handleSaveNotes = () => {
        const {title, content, textButton, noteId} = this.state;
        const {saveNotes, updateNote} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))
        const data = {
            title: title,
            content: content,
            date: new Date().getTime(),
            userId: userData.uid
        }
        if(textButton === 'SIMPAN'){
            saveNotes(data)
        } else {
            data.noteId = noteId
            updateNote(data)
        }
        
        // console.log(window.history.state.uid)
    }

    onInputChange= (e, type) => {
        this.setState({
            [type]: e.target.value
        })
    }

    updateNote = (note) => {
        this.setState({
            title: note.data.title,
            content: note.data.content,
            textButton: 'UPDATE',
            noteId: note.id
        })
    }
    cancelUpdate= () => {
        this.setState({
            title: '',
            content: '',
            textButton: 'SIMPAN'
        })
    }

    deleteNotes = (e, note) => {
        e.stopPropagation();
        const {deleteNotes} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'))
        const data = {
            userId: userData.uid,
            noteId: note.id
        }
        deleteNotes(data)
    }

    render(){
        const {title, content, textButton} = this.state;
        const {notes} = this.props;
        const {updateNote, cancelUpdate} = this;
        return(
            <div className="container">
                <div className="input-form">
                    <input placeholder="title" className="input-title" value={title} onChange={(e)=> this.onInputChange(e, 'title')}/>
                    <textarea placeholder="content" className="input-content" value={content} onChange={(e)=> this.onInputChange(e, 'content')}>

                    </textarea>
                    <div className="action-wrapper">
                        {
                            textButton === 'UPDATE' ? (
                                <button className="save-btn cancel" onClick={this.cancelUpdate}>Cancel</button>
                            ) : <div/>
                                
                        }
                        <button className="save-btn" onClick={this.handleSaveNotes}>{this.state.textButton}</button>
                    </div>
                   
                </div>
                <hr/>
                {
                    notes.length > 0 ? (
                        <Fragment>
                            {
                                notes.map(note => {
                                    return(
                                        <div className="card-content" key={note.id} onClick={()=>updateNote(note)}>
                                            <p className="title">{note.data.title}</p>
                                            <p className="date">{note.data.date}</p>
                                            <p className="content">{note.data.content}</p>
                                            <div className="delete-btn" onClick={(e)=> this.deleteNotes(e, note)}>X</div>
                                        </div>
                                    )
                                })
                            }
                        </Fragment>
                        
                       
                    ) : null
                }
                
                {/* <button>Register</button>
                <button>Dashboard</button> */}
            </div>
        )  
    }
}

const reduxState = (state) => ({
    userData: state.user,
    notes: state.notes
})

const reduxDispatch = (dispatch) => ({
    saveNotes : (data)=> dispatch(addDataToAPI(data)),
    getNotes : (data) => dispatch(getDataToAPI(data)),
    updateNote: (data) => dispatch(updateDataToAPI(data)),
    deleteNotes: (data) => dispatch(deleteDataToAPI(data))
})
export default connect(reduxState, reduxDispatch)(Dashboard);