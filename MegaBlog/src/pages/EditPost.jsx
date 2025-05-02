import React from 'react'
import { Container, PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const EditPost = () => {
  const [isPost, setPosts] = React.useState([]);//could be null too

  const { slug } = useParams();

  const navigate = useNavigate();

  useEffect(() => {// if slug is not null, then fetch the post

    if (slug) {

      appwriteService.getPost((slug))
        .then((post_res) => {
          if (post_res) {
            setPosts(post_res);
          } else {
            // navigate('/404'); // could have used a 404 page here
            console.log("Post not found");
          }
          // setPosts(post_res);
        })
        .catch((err) => {
          console.log(err);
        });

    } else {
      navigate('/'); // redirect to home page if slug is null
    }

  }, [slug, navigate]);

  return (isPost ? (
    <div className='py-8'>
      <Container>
        <PostForm post={isPost} />
      </Container>
    </div>
  ) : null)
}

export default EditPost