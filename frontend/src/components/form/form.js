import React,{useState,useEffect} from 'react';
import useStyles from './styles';
import {TextField,Button,Typography,Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch,useSelector} from 'react-redux';
import {createPosts,updatePost} from '../../actions/posts';

const Form  = ({currentId,setcurrentId}) =>{
    const style = useStyles();
    const dispatch = useDispatch();
    const [postData,setPostData] = useState({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:'',
    });
    const post = useSelector((state) => currentId ?state.posts.find((p) => p._id ===currentId):null);

    useEffect(() =>{
        if(post) setPostData(post);
    },[post])

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId,postData))
        }
        else{
            dispatch(createPosts(postData));
        }
        clear();
    }
    const clear =() =>{
        setcurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }
    return (
        <Paper className={style.paper}>
            <form autoComplete="off" noValidate className={`${style.form} ${style.root}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {currentId ? 'Editing !!' :'Add a memory!'}
                </Typography>
                <TextField name="creator" variant="outlined" label="Creator" 
                    fullWidth value={postData.creator} 
                    onChange={(e) => setPostData({...postData,creator:e.target.value
                })} />
                <TextField name="title" variant="outlined" label="Title" 
                    fullWidth value={postData.title} 
                    onChange={(e) => setPostData({...postData,title:e.target.value
                })} />
                <TextField name="message" variant="outlined" label="Message" 
                    fullWidth value={postData.message} 
                    onChange={(e) => setPostData({...postData,message:e.target.value
                })} />
                <TextField name="tags" variant="outlined" label="Tags" 
                    fullWidth value={postData.tags} 
                    onChange={(e) => setPostData({...postData,tags:e.target.value.split(',') 
                })} />

                <div className={style.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({base64}) => setPostData({...postData,selectedFile:base64})} />
                </div>
                <div className={style.together}>
                <Button className={style.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Save
                </Button>
                <Button className={style.buttonClear} variant="outlined" color="secondary" size="large" fullWidth onClick={clear}>
                    Clear
                </Button>
                </div>
            </form>
        </Paper>
    )
}

export default Form;