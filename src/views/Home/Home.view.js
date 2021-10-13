import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Layout } from "layouts";
import { useAuthContext } from "context/auth.context";
import { LayoutMain } from "../../layouts";

const HomeView = () => {
  // const [blogName, setBlogName] = useState("");
  // const [blogsList, setBlogsList] = useState([]);
  //
  // const getBlogPosts = async () => {
  //   const blogPosts = await API.graphql(graphqlOperation(listBlogs));
  //   const posts = blogPosts.data.listBlogs.items;
  //   setBlogsList(posts);
  // };
  //
  // useEffect(() => {
  //   getBlogPosts();
  // }, []);
  //
  // const addBlog = async () => {
  //   const newBlog = {
  //     id: uuidv4(),
  //     name: blogName,
  //   };
  //   const newBlogsList = [newBlog, ...blogsList];
  //   setBlogsList(newBlogsList);
  //   setBlogName("");
  //
  //   await API.graphql(
  //     graphqlOperation(createBlog, { input: { name: blogName } })
  //   );
  // };
  //
  // useEffect(() => {
  //   const apiSub = API.graphql(graphqlOperation(onCreateBlog)).subscribe({
  //     next: (newPostData) => {
  //       const newPost = newPostData.value.data.onCreateBlog;
  //       const newBlogsList = [newPost, ...blogsList];
  //       const blogIds = blogsList.map(({ id }) => id);
  //
  //       if (!blogIds.includes(newPost.id)) {
  //         setBlogsList(newBlogsList);
  //       }
  //     },
  //     error: (errorValue) => {
  //       console.log({ errorValue });
  //     },
  //   });
  //
  //   return () => {
  //     apiSub.unsubscribe();
  //   };
  // }, [blogsList]);

  const auth = useAuthContext();
  console.log(auth);

  return (
    <LayoutMain>
      <div className="container block">
        <div className="columns">
          <div className="column is-6 is-offset-2">
            <input
              name="todo"
              className="input is-warning is-large"
              type="text"
              value={"blogName"}
              placeholder="Add TODO"
            />
          </div>
          <div className="column is-2 is-flex is-justify-content-center">
            <button type="submit" className="button is-large is-warning">
              Add przepis
            </button>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default HomeView;
