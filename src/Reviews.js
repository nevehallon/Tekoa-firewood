import React, { Component } from 'react';
import { Button, Comment, Form, Container, Rating } from 'semantic-ui-react';

class Reviews extends Component (

  constructor(props) {
    super(props);
    this.state = {}
  }

  let handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating });


  render() {
    return (
        <Container className="sum">   
              <Comment.Group className="com-grp">
              <Comment>
                <Comment.Avatar as='a' src='/images/avatar/small/joe.jpg' />
                <Comment.Content>
                  <Comment.Author>Joe Henderson</Comment.Author>
                  <Comment.Metadata>
                    <div>1 day ago</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    
                    <div>
                      <Rating icon='star' defaultRating={3} maxRating={5} />
                    </div>
                    <p>
                      Preserve until your next run, when the watch lets you see how Impermanent your efforts
                      are.
                    </p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                <Comment.Avatar as='a' src='/images/avatar/small/christian.jpg' />
                <Comment.Content>
                  <Comment.Author>Christian Rocha</Comment.Author>
                  <Comment.Metadata>
                    <div>2 days ago</div>
                  </Comment.Metadata>
                  <Comment.Text>I re-tweeted this.</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea />
                <div>
                  <Rating maxRating={5} onRate={this.handleRate} />
                  <pre>{JSON.stringify(this.state, null, 2)}</pre>
                </div>
                <Button content='Add Comment' labelPosition='left' icon='edit' primary />
              </Form>
            </Comment.Group>
            </Container>
    )
  }
}

export default Reviews;