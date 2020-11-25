import React, { Component } from 'react'
import { getBlog } from '../Api.jsx'

export default class SingleBlog extends Component {
  state = {
    blog: []
  }
  
  componentDidMount() {
      getBlog(this.props.id)
        .then(res => {
            console.log(res.data._id)
          this.setState({ blog: res.data})
        })
        .catch(err => {
            console.log(err)
        })
  }
  
    render() {
      const { blog } = this.state; 

      return (
        <main>
          <div className="blog-title">
             {new Date(blog.title).toLocaleDateString()}
          </div>
            <div className="blog-description"> 
             {blog.description}
            </div> 
        </main>
      )
    }
}


  { /*
      <main>
        <div className={styles.fullarticle} key="article">
          <h2 className={styles.articletitle}> {article.title} </h2>
          <div className={styles.publishedby}>
            <em>
              Published by <b>{`${article.author}`} </b> on{" "}
              {new Date(article.created_at).toLocaleDateString()}
            </em>
          </div>
          <br></br>
          <section className={styles.articlebody}>{article.body}</section>
          <div className={styles.votes}>
            <Voting article_id={article.article_id} votes={article.votes} />
          </div>
        </div>
        <div className={styles.comments}>
          <Comments article_id={article.article_id} />
        </div>
      </main>
    );
  }
} */}