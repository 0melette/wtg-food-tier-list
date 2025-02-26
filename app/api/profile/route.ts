import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import User from "@/models/User";

// export async function GET() {
//   return NextResponse.json({ MONGODB_URI: process.env.MONGODB_URI });
// }

export async function POST(req: Request) {
  try {
    await connectToDB();

    const body = await req.json();
    console.log("📌 Request body:", body);

    const { username, avatar } = body;
    if (!username) {
      return NextResponse.json(
        { error: "Username is required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return NextResponse.json(
        { error: "Username already taken" },
        { status: 400 }
      );
    }

    const newUser = new User({ username, avatar });
    console.log("📝 Creating new user:", newUser);

    await newUser.save();
    console.log("✅ User saved to database");

    return NextResponse.json(
      { message: "User created", user: newUser },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Username already taken" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
