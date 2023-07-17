import Image from "next/image";
import classes from "./home.module.css";
import Link from "next/link";
export default function HomePage() {
  return (
    <main>
      <div className='preview'>
        <Link href={"/posts"}>
          <p className={classes.postsLink}> Go to Posts section</p>
        </Link>
      </div>
    </main>
  );
}
