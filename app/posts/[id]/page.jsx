import { Suspense } from "react";
import styles from "./loading.module.css";
import Comments from "@/app/components/comments";
import FetchPost from "@/app/components/fetchPost";
import LoadingComponent from "./loading";

const PostDetails = async ({ params }) => {
  return (
    <main>
      <div className="preview">
        <>
          <h2> Post </h2>
          <Suspense fallback={<LoadingComponent />}>
            <FetchPost postId={params.id} />
            <>
              <h2> Comments </h2>
              <Suspense fallback={<LoadingComponent />}>
                <Comments postId={params.id} />
              </Suspense>
            </>
          </Suspense>
        </>
      </div>
    </main>
  );
};

export default PostDetails;
