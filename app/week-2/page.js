import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Week 2!</h1>
      <StudentInfo />
      <p>
        -&gt;
        <Link href="/">Go Back</Link>
        &lt;-
      </p>
    </main>
  );
}
