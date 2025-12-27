import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { transcript, question } = body;

    if (!transcript || !question) {
      return NextResponse.json(
        { error: "Missing transcript or question" },
        { status: 400 }
      );
    }

    // TODO: Implement AI scoring using OpenAI/Claude API
    // Analyze for:
    // - Filler words (um, uh, like, you know)
    // - Confidence indicators (tone, word choice)
    // - Clarity (structure, coherence)
    // - Content quality (relevance, specificity)

    // Mock response for now
    const mockScores = {
      filler: Math.floor(Math.random() * 30) + 70, // 70-100
      confidence: Math.floor(Math.random() * 30) + 70,
      clarity: Math.floor(Math.random() * 30) + 70,
      content: Math.floor(Math.random() * 30) + 70,
    };

    const overall = Math.round(
      (mockScores.filler +
        mockScores.confidence +
        mockScores.clarity +
        mockScores.content) /
        4
    );

    // Detect filler words
    const fillerWords = {
      um: (transcript.match(/\bum\b/gi) || []).length,
      uh: (transcript.match(/\buh\b/gi) || []).length,
      like: (transcript.match(/\blike\b/gi) || []).length,
      "you know": (transcript.match(/you know/gi) || []).length,
    };

    return NextResponse.json({
      success: true,
      scores: mockScores,
      overall,
      fillerWords,
    });
  } catch (error) {
    console.error("Scoring error:", error);
    return NextResponse.json(
      { error: "Failed to score response" },
      { status: 500 }
    );
  }
}
