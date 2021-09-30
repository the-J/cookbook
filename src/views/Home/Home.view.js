import React, { useCallback, useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createBlog } from "graphql/mutations";
import { listBlogs } from "graphql/queries";
import { onCreateBlog } from "graphql/subscriptions";
import { HomeLayout } from "layouts";
import { RecipeList } from "components";

const HomeView = () => {
  const [blogName, setBlogName] = useState("");
  const [blogsList, setBlogsList] = useState([]);

  const sortPosts = (a, b) => a.updatedAt < b.updatedAt;

  const getBlogPosts = async () => {
    const blogPosts = await API.graphql(graphqlOperation(listBlogs));
    const posts = blogPosts.data.listBlogs.items.sort(sortPosts);
    setBlogsList(posts);
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  const addBlog = async () => {
    await API.graphql(
      graphqlOperation(createBlog, { input: { name: blogName } })
    );
  };

  const blogSub = useCallback(() => {
    return API.graphql(graphqlOperation(onCreateBlog)).subscribe({
      next: (blogsData) => {
        const newPost = blogsData.value.data.onCreateBlog;
        const newBlogsList = [newPost, ...blogsList];
        setBlogsList((prevState) => {
          return prevState
            .concat(newBlogsList)
            .filter((x) => x.name)
            .sort(sortPosts);
        });
      },
    });
  }, [blogsList]);

  useEffect(() => {
    blogSub();

    return () => {
      blogSub().unsubscribe();
    };
  }, []);
  return (
    <HomeLayout className={"m-4"}>
      <div className="block">
        <input
          name="todo"
          className="input is-primary is-large"
          type="text"
          value={blogName}
          onChange={(e) => setBlogName(e.target.value)}
          placeholder="Add TODO"
        />
      </div>
      <button className="button mt-1" onClick={addBlog}>
        Add ToDo
      </button>
      <RecipeList recipes={blogsList} />
    </HomeLayout>
  );
};

export default HomeView;
