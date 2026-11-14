import type { ComponentType } from "react";
import { CopyAndPasteFontsGuideClosing, CopyAndPasteFontsGuidePost } from "./posts/copy-and-paste-fonts-guide";
import { InstagramCaptionsClosing, InstagramCaptionsPost } from "./posts/instagram-captions";

export interface PostContent {
  Body: ComponentType;
  /** Optional closing section shown after the FAQ, under its own heading. */
  closing?: { heading: string; Content: ComponentType };
}

/** Maps each blog post slug to its body and (optional) closing section. */
export const postContent: Record<string, PostContent> = {
  "instagram-captions": {
    Body: InstagramCaptionsPost,
    closing: { heading: "Find your caption and post it", Content: InstagramCaptionsClosing },
  },
  "copy-and-paste-fonts-iphone-android-pc": {
    Body: CopyAndPasteFontsGuidePost,
    closing: { heading: "Final thoughts", Content: CopyAndPasteFontsGuideClosing },
  },
};
