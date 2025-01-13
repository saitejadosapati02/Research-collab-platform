import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const proposals = await db.projectProposal.findMany({
      include: {
        proposalReviews: {
          include: {
            reviewer: true,
          },
        },
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    return NextResponse.json(proposals);
  } catch (err) {
    const error = err;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await req.json();
    const proposal = await db.projectProposal.create({
      data: {
        userId: user.id,
        title: data.title,
        description: data.description,
        attachments: data.attachments,
      },
      include: {
        proposalReviews: true,
      },
    });

    return NextResponse.json(proposal);
  } catch (err) {
    const error = err;
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
