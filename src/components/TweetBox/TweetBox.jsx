import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {


  const isMaximum = props.tweetText.length === 0 ||props.tweetText.length > 140


  function handleOnTweetTextChange (event) {

    props.setTweetText(event.target.value)
  }



  function handleOnSubmit () {
    
    const newTweet = {name: props.userProfile?.name, handle: props.userProfile?.handle, text: props.tweetText, comments: 0, retweets: 0, likes: 0 };
    
    
    
    props.setTweets((pastTweets) => [ 
      ...pastTweets, {
      ...newTweet, id : pastTweets.length }
    ])
    props.setTweetText("")

    
  }

  return (
    <div className="tweet-box">
      <TweetInput value = {props.tweetText} handleOnChange = {handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText = {props.tweetText}/>
        <TweetSubmitButton isMaximum = {isMaximum} handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {

  return (
    <span className = {props.tweetText.length>140 ? "red" : ""}>{props.tweetText.length > 0 ? 140 - props.tweetText.length : null}</span>
  )
}

export function TweetSubmitButton({handleOnSubmit, isMaximum}, ) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" disabled = {isMaximum} onClick = {handleOnSubmit}>Tweet</button>
    </div>
  )
}
