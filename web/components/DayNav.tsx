import Link from "next/link";
import { neighbors } from "@/content";

export function DayNav({ id }: { id: number }) {
  const { prev, next } = neighbors(id);

  return (
    <nav className="mt-10 flex justify-between border-t border-border pt-6 text-sm">
      {prev ? (
        <Link href={`/day/${prev}`} className="text-accent hover:underline">
          {"←"} Day {prev}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={`/day/${next}`} className="text-accent hover:underline">
          Day {next} {"→"}
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
