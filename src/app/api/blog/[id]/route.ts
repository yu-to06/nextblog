import {supabase} from "@/utils/supabaseClient";
import {notFound} from "next/navigation";
import {NextResponse} from "next/server";

export async function GET(req: Request, res: Response) {
  // [http://localhost3000/api , id] http://localhost3000/api/blog/[id] をblogで切って、配列を作る。
  const id = req.url.split("/blog/")[1];
  const {data, error} = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json(error);
  }

  if (!data) {
    notFound();
  }
  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, {status: 200});
}

export async function DELETE(req: Request, res: Response) {
  // [http://localhost3000/api , id] http://localhost3000/api/blog/[id] をblogで切って、配列を作る。
  const id = req.url.split("/blog/")[1];
  const {error: deleteError} = await supabase
    .from("posts")
    .delete()
    .eq("id", id);

  if (deleteError) {
    return NextResponse.json(deleteError);
  }

  if (deleteError) {
    return NextResponse.json(deleteError);
  }

  return NextResponse.json({status: 200});
}
